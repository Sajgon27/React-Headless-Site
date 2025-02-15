import { gql } from "@apollo/client";

// Fetching teachers data for cards
export const GET_TEACHERS = gql`
  query GetTeachers {
    nauczyciele {
      nodes {
        id
        databaseId
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacje {
          lokalizacja {
            wojewodztwo
            miasto
          }
          metody {
            metoda
          }
          spotkanie
          cennik
          kontakt
          stronyInternetowe {
            strona
          }
          edukacja
          opis
        }
      }
    }
  }
`;


// Fetching teachers data for Next/Previous functionality
export const GET_ALL_TEACHERS = gql`
  query GetAllTeachers {
    nauczyciele {
      nodes {
        id
        databaseId
        slug
        title
      }
    }
  }
`;


// Content for Home Page
export const GET_HOME_CONTENT = gql`
  query GetHomeContent {
    pageBy(uri: "strona-glowna") {
      id
      stronaglowna {
        # Replace with your ACF field group
        tresc {
          naglowek
          tekst
        }
        partnerzy {
          partner {
            logo {
              node {
                sourceUrl
              }
            }
            adresUrl
          }
        }
      }
    }
  }
`;

// Content for Metody Nauczania Page
export const GET_METODY_CONTENT = gql`
  query GetMetodyContent {
    pageBy(uri: "metody-nauczania") {
      id
      metodyNauczania {
        # Replace with your ACF field group
        iSekcja {
          naglowek
          tekst
        }
        iiSekcja {
          naglowek
          tekst
        }
        iiiSekcja {
          naglowek
          tekst
        }
        ivSekcja {
          naglowek
          tekst
        }
      }
    }
  }
`;

// Content for O nas Page
export const GET_ONAS_CONTENT = gql`
  query GetOnasContent {
    pageBy(uri: "o-nas") {
      id
      oNas {    
        iSekcja {
          naglowek
          tekst
        }
        iiSekcja {
          naglowek
          tekst
        }
        iiiSekcja {
          naglowek
          tekst
        }
      
      }
    }
  }
`;

// Content for Polityka Prywatnosci page
export const GET_POLITYKA_CONTENT = gql`
  query GetPolitykaContent {
    pageBy(uri: "polityka-prywatnosci") {
      id
      politykaPrywatnosci {    
        tekst
      }
    }
  }
`;

// Fetching all data about single teacher
export const GET_SINGLE_TEACHER = gql`
  query GetSingleTeacher($id: ID!) {
    nauczyciel(id: $id, idType: DATABASE_ID) {
      id
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      informacje {
        lokalizacja {
          wojewodztwo
          miasto
        }
        metody {
          metoda
        }
        spotkanie
        cennik
        kontakt
        stronyInternetowe {
          strona
        }
        edukacja
        opis
      }
    }
  }
`;
