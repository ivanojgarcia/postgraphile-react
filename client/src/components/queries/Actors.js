import gql from 'graphql-tag';

export const GET_ALL_ACTORS = gql `
    query allActors {
        allActors {
            nodes {
            actorId
            firstName
            lastName
            }
        }
    }
`;