import React from "react";
import { Alert, Container } from "react-bootstrap";

const FirebaseConfigErrorPage = ({ error }) => {
  const isMissingConfig = error?.type === "missing";

  return (
    <Container style={{ maxWidth: "720px", marginTop: "8%" }}>
      <Alert variant="danger">
        <Alert.Heading>
          {isMissingConfig
            ? "Firebase environment variables are missing"
            : "Firebase configuration is invalid"}
        </Alert.Heading>
        <p>
          {isMissingConfig
            ? `Add these missing Vite environment variables: ${error.missingKeys.join(", ")}.`
            : "Check that the Firebase API key, auth domain, project ID, sender ID, and app ID match your Firebase project."}
        </p>
        {error?.message && <p className="mb-0">Firebase error: {error.message}</p>}
      </Alert>
    </Container>
  );
};

export default FirebaseConfigErrorPage;
