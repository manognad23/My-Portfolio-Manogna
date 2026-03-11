import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import { Reveal } from "@/lib/motion";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_cur2hs1",
        "template_fol2eyl",
        formRef.current,
        "jM-zhuE9sYHqZUKa8"
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project idea, opportunity, or just want to say hello? I'd love to hear from you."
        />

        <Reveal>
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name</label>
                <input
                  name="from_name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                <input
                  name="from_email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
              <input
                name="subject"
                required
                maxLength={200}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sm text-primary justify-center">
                  <CheckCircle size={16} /> Message sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sm text-destructive justify-center">
                  <XCircle size={16} /> Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
