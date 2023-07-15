import { gql } from "@apollo/client";
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      capital
      currency
      emoji
      languages {
        name
        native
      }
      phone
      states {
        name
      }
      continent {
        name
      }
      code
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($countryName: String!) {
    countries {
      name
      capital
      currency
      emoji
      languages {
        name
        native
      }
      phone
      continent {
        name
      }
      code
    }
  }
`;
