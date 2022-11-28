// API url: https://graphqlzero.almansi.me/api

//  uri: "https://flyby-gateway.herokuapp.com/",

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
// } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://flyby-gateway.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

// client
//   .query({
//     query: gql`
//       query GetLocations {
//         locations {
//           id
//           name
//           description
//           photo
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

/*
Start with the file `question-5/question-5.js`.

Create a GraphQL API call that uses the end point `https://graphqlzero.almansi.me/api` that returns a list of `posts`. You can see an example of getting the posts in the documentation: https://graphqlzero.almansi.me/#example-top

Use a lodash method to sort the posts in a descending order using the `id` value. Store this as a variable so you can reuse it in the next part.

Loop through the **first 10** results from the variable you created above. Generate HTML for these results into the `<ul>` with the id of `results-list`. You should generate a `<li>` for each item, and display the the `id` and `title` fields in this `<li>`.

Style the HTML using Sass.

You can write the answer for this question in either JavaScript or TypeScript.
*/

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const postsList = document.querySelector(".results-list");

let posts = [];

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query ($options: PageQueryOptions) {
        posts(options: $options) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
    `,
  })
  .then((result) => {
    posts = result.data.posts.data;
    for (let i = 0; i <= 9; i++) {
      postsList.innerHTML += `<li>${posts[i].id} ${posts[i].title}<li>`;
    }
    console.log(posts.posts.data);
  });

/**/
