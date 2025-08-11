export default function GoogleMap() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
      <iframe
        title="DASS Insurance Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6371696952365!2d73.13152907492764!3d22.331770200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc904686c292d%3A0x176b75c40ee26539!2sDass%20Insurance!5e1!3m2!1sen!2sin!4v1753276352833!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
