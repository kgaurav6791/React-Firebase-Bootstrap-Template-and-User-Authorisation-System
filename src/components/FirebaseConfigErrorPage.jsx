import React from "react";
import { Alert, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const FirebaseConfigErrorPage = ({ error }) => {
  const location = useLocation();
  const pageError = error || location.state?.firebaseConfigError;
  const isMissingConfig = pageError?.type === "missing";

  const title = isMissingConfig
    ? "Firebase environment variables are missing"
    : "Firebase configuration is invalid";

  const details = isMissingConfig
    ? `Add these missing Vite environment variables before starting the app: ${pageError.missingKeys.join(", ")}.`
    : "Firebase rejected the configured project values. Check that the Firebase API key, auth domain, project ID, sender ID, and app ID all belong to the same Firebase project.";

  return (
    <Container style={{ maxWidth: "720px", marginTop: "8%" }}>
      <Alert variant="danger">
        <Alert.Heading>{title}</Alert.Heading>
        <p>{details}</p>
        {pageError?.message && (
          <p className="mb-0">Firebase error: {pageError.message}</p>
        )}
      </Alert>
    </Container>
  );
};

export default FirebaseConfigErrorPage;
