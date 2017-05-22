const domains = require('./domains');

/**
 * @typedef {Object} Inbox
 * @property {String} name Provider name
 * @property {String} url Inbox url
 */

const filterByEmail = email => domains.find(domain => domain.test.test(email));

/**
 * returns inbox information based on the users email
 * @param {String} email
 * @returns {Inbox}
 */
const getInbox = (email) => {
  if (!email) {
    return null;
  }
  const result = filterByEmail(email);
  if (result) {
    return result.inbox;
  }
  return null;
};

const getFromInbox = (email, type) => {
  const inbox = getInbox(email);
  if (!inbox) {
    return null;
  }
  return inbox[type];
};

/**
 * returns the inbox url
 * @param {String} email
 * @returns {String}
 */
const getProviderUrl = email => getFromInbox(email, 'url');

/**
 * returns provider name
 * @param {string} email
 * @returns {Inbox}
 */
const getProviderName = email => getFromInbox(email, 'name');

module.exports = {
  getInbox,
  getProviderUrl,
  getProviderName,
};
