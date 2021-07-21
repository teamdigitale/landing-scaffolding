const path = require('path');
const fsPromises = require('fs/promises');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent);
    if (parent.sourceInstanceName === 'contents') {
      createNodeField({
        node,
        name: 'slug',
        value: parent.relativePath.replace(path.extname(parent.relativePath), ''),
      });
    }
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  return result.data.allMarkdownRemark.nodes.forEach(({ fields }) => {
    createPage({
      path: fields.slug,
      component: path.resolve(__dirname, 'src/templates/NewsTemplate.js'),
      context: {
        slug: fields.slug,
      },
    });
  });
};
