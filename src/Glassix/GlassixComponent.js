"use client";

import { useEffect } from 'react';

const GlassixWidget = () => {
  useEffect(() => {
    const widgetOptions = {
      apiKey: "8d4f4491-54eb-4849-a5c1-d5aff88af152",
      snippetId: "onNYG1BXw9Xd0gJsnqx3"
    };

    const initializeWidget = () => {
      if (window.GlassixWidgetClient) {
        if (typeof window.GlassixWidgetClient === "function") {
          if (!window.widgetClient) {
            window.widgetClient = new window.GlassixWidgetClient(widgetOptions);
            window.widgetClient.attach();
            if (window.glassixWidgetScriptLoaded) {
              window.glassixWidgetScriptLoaded();
            }
          }
        } else {
          console.error("GlassixWidgetClient is not a function");
        }
      } else {
        console.error("GlassixWidgetClient is not defined");
      }
    };

    const loadScript = () => {
      const existingScript = document.getElementById('glassix-widget-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.crossOrigin = 'anonymous';
        script.id = 'glassix-widget-script';
        script.src = 'https://cdn.glassix.net/clients/widget.1.2.min.js';
        script.onload = initializeWidget;
        script.onerror = () => {
          console.error("Failed to load the Glassix widget script.");
        };
        document.body.appendChild(script);
      } else {
        initializeWidget();
      }
    };

    loadScript(); // NÃO TIREEEEEE PELO AMOR DE DEUSSSSSSSSSSSSSSSSSSSSS

  }, []);

  return null;
};

export default GlassixWidget;
