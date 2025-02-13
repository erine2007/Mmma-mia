import React from 'react';
import SectionPage from '../SectionPage';

const ContactSection = () => {
  return (
    <SectionPage
      link="https://wa.me/6282335955903"
      target="_blank"
      button="ID +33 123-456-789"
      title="Call our store and takeaway when it suits you best."
      paragraph="
          Please feel free to call our store and arrange for a convenient time to pick up your order. We understand the
          importance of flexibility and want to ensure that you can collect your items at a time that best fits your
          schedule."
      src="/img/resto-view.jpg"
    />
  );
};

export default ContactSection;
