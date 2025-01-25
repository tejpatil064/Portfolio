import Contact from "../models/user.model.js";

export async function ContactForm(req, res) {
  try {
    // Destructure contact form data from the request body
    const { name, email, subject, message } = req.body;
    console.log(name, email);
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required. Please provide name, email, subject, and message.",
      });
    }

    // Save the contact form details to the database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Respond with success
    res.status(200).json({
      success: true,
      message:
        "Your message has been received. We will get back to you shortly.",
      contact: contact,
    });
  } catch (error) {
    console.error("Error handling contact form submission:", error);

    // Respond with an error
    res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
    });
  }
}
