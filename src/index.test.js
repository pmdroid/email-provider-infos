const rewire = require('rewire');
const { expect } = require('chai');

const lib = rewire('./index');

describe('emaild', () => {
  describe('filterByEmail', () => {
    const filterByEmail = lib.__get__('filterByEmail');

    it('should return valid infos', () => {
      const infos = filterByEmail('someemail@gmail.com');
      expect(infos.inbox.name).to.be.equal('GMail');
      expect(infos.inbox.url).to.be.equal('https://mail.google.com/');
    });

    it('should return undefined for missing email', () => {
      const infos = filterByEmail();
      expect(infos).to.be.equal(undefined);
    });

    it('should return undefined for none existing provider', () => {
      const infos = filterByEmail('someemail@somedomain.com');
      expect(infos).to.be.equal(undefined);
    });
  });

  describe('getFromInbox', () => {
    const getFromInbox = lib.__get__('getFromInbox');

    it('should return the provider url', () => {
      const url = getFromInbox('someemail@gmail.com', 'url');
      expect(url).to.be.equal('https://mail.google.com/');
    });

    it('should return undefined for unknown inbox', () => {
      const data = getFromInbox();
      expect(data).to.be.equal(null);
    });
  });

  describe('getInbox', () => {
    it('should return the inbox information', () => {
      const inbox = lib.getInbox('someemail@gmail.com');
      expect(inbox.name).to.be.equal('GMail');
      expect(inbox.url).to.be.equal('https://mail.google.com/');
    });

    it('should return the provider url', () => {
      const url = lib.getProviderUrl('someemail@gmail.com');
      expect(url).to.be.equal('https://mail.google.com/');
    });

    it('should return the provider name', () => {
      const name = lib.getProviderName('someemail@gmail.com');
      expect(name).to.be.equal('GMail');
    });

    it('should return the inbox information for gmail', () => {
      const inbox = lib.getInbox('someemail@gmail.com');
      expect(inbox.name).to.be.equal('GMail');
      expect(inbox.url).to.be.equal('https://mail.google.com/');
    });

    it('should be null for unkwon domain', () => {
      const inbox = lib.getInbox('someemail@somedomain.some');
      expect(inbox).to.be.equal(null);
    });

    it('should be null for missing email', () => {
      const inbox = lib.getInbox();
      expect(inbox).to.be.equal(null);
    });
  });
});
