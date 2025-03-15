import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaComment, FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          title: "Consulta de Contacto",
          name: formData.name,
          email: "rodri.martinceron@gmail.com",
          message: formData.email + ". " + formData.message,
          time: new Date().toLocaleString(),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "" }
      );

      if (response.status === 200) {
        setStatus("✅ Mensaje enviado con éxito");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error al enviar el mensaje");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("❌ Error en la conexión con EmailJS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>
        <FaEnvelope /> Contacto
      </h2>

      {status && (
        <motion.p
          className="status-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {status}
        </motion.p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaComment className="input-icon" />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? (
            "Enviando..."
          ) : (
            <>
              <FaPaperPlane /> Enviar
            </>
          )}
        </motion.button>
      </form>
    </motion.section>
  );
}
