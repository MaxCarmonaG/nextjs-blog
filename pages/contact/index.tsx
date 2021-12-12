import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../../components/ContactPage/ContactForm";

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact Me</title>
      <meta name="description" content="Send me your messages" />
    </Head>
    <ContactForm />
  </>
);

export default ContactPage;
