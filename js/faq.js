document.addEventListener("DOMContentLoaded", () => {
  const faq = document.querySelector("#faq");

  if (!faq) return;

  const triggers = faq.querySelectorAll(".faq__trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded =
        trigger.getAttribute("aria-expanded") === "true";

      // Cerrar todas las preguntas.
      triggers.forEach((item) => {
        const panelId = item.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        item.setAttribute("aria-expanded", "false");

        if (panel) {
          panel.hidden = true;
        }
      });

      // Abrir la pregunta seleccionada si estaba cerrada.
      if (!isExpanded) {
        const panelId = trigger.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        trigger.setAttribute("aria-expanded", "true");

        if (panel) {
          panel.hidden = false;
        }
      }
    });
  });
});