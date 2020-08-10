import styled from 'styled-components';
import { useRouter } from 'next/router';
import { LenderHeader } from 'src/components/lenderHeader';
import { Container } from 'src/components/container';
import { FormGroup, Button } from 'src/components/forms';
import {
  useLenderFieldsApi,
  LenderFieldsApiStatus,
} from 'src/hooks/useLenderFieldsApi';
import { convertFieldToElement } from 'src/utils';
import { useState, useEffect } from 'react';
import { usePrettyPrint } from 'src/hooks/usePrettyPrint';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  width: 100%;
  align-items: stretch;
`;

const LeadIn = styled.p`
  margin-bottom: 50px;
  text-align: center;
`;

const Outcome = styled.span`
  text-align: center;
`;

const ButtonLabel = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
`;

interface ValuesType {
  [key: string]: string | boolean;
}

const DummyPage = () => {
  const router = useRouter();
  const [values, setValues] = useState<ValuesType>({});
  const [fields, setFields] = useState<JSX.Element[]>([]);
  const [valuesLoaded, setValuesLoaded] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [decision, setDecision] = useState<string | undefined>(undefined);

  const lenderId = router.query.lenderId?.toString();

  const [lenderData, lenderDataStatus] = useLenderFieldsApi(lenderId);

  const lenderDataIsLoading =
    lenderDataStatus === LenderFieldsApiStatus.Unloaded ||
    lenderDataStatus === LenderFieldsApiStatus.Loading;

  useEffect(() => {
    if (!lenderData) return;

    const initialValues = lenderData.fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: '' }),
      {} as any,
    );

    setValues(initialValues);
    setValuesLoaded(true);
  }, [lenderData]);

  useEffect(() => {
    if (!valuesLoaded) return;
    if (!values) return;

    const initialFields = lenderData!.fields.map((field, index) => {
      const value = values[field.name];
      const disabled = isSubmitting;
      const handleChange = (value: string | boolean) => {
        setValues((currentValues) => ({
          ...currentValues,
          [field.name]: value,
        }));
      };

      return (
        <FormGroup key={index}>
          {convertFieldToElement(field, value, handleChange, disabled)}
        </FormGroup>
      );
    });

    setFields(initialFields);
  }, [valuesLoaded, values, isSubmitting]);

  const submitValues = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch(`http://localhost:3000/api/lenders/${lenderId}`, {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsSubmitting(false);
          setDecision(data.decision);
        }, 750);
      });
  };

  const outcome =
    decision === 'accepted' ? (
      <Outcome>Congratulations, you have been accepted for your loan!</Outcome>
    ) : (
      <Outcome>
        We're sorry, but your application hasn't been accepted at this time.
      </Outcome>
    );

  usePrettyPrint(values);

  return (
    <Container>
      {lenderDataIsLoading && <span>Loading...</span>}
      {!lenderDataIsLoading && (
        <>
          <LenderHeader>{lenderData!.name}</LenderHeader>
          {!decision && (
            <>
              <LeadIn>
                Fill out the form below to find out if you qualify <br />
                for a loan with {lenderData!.name}
              </LeadIn>
              <StyledForm onSubmit={submitValues}>
                {fields}
                <FormGroup>
                  <Button type="submit" loading={isSubmitting}>
                    <ButtonLabel>Submit</ButtonLabel>
                  </Button>
                </FormGroup>
              </StyledForm>
            </>
          )}
          {decision && outcome}
        </>
      )}
    </Container>
  );
};

export default DummyPage;
