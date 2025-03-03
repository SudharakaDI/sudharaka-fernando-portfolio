import ContactForm from "./ContactForm.jsx";

const Contact = () => {
  return (
    <div className="pb-4 ">
      <h2 className="my-20 text-center text-4xl">Contact Me</h2>
      <div className="flex justify-center items-center w-full mb-4">
        <div className="pb-4 w-full lg:w-1/2">
          <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
