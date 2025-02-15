import { gql } from "@apollo/client";

// Sending email data to WordPress
export const SEND_CONTACT_EMAIL = gql`
  mutation SendContactEmail(
    $name: String!
    $email: String!
    $message: String!
  ) {
    sendContactEmail(input: { name: $name, email: $email, message: $message }) {
      success
      message
    }
  }
`;