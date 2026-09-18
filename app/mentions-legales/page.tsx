"use client";

import React, { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wp-singular page-template page-template-elementor_header_footer page page-id-75 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor wp-child-theme-hello-theme-child-master theme-default elementor-default elementor-template-full-width elementor-kit-11 elementor-page elementor-page-75">
      




<a className="skip-link screen-reader-text" href="#content">Aller au contenu</a>
<header data-elementor-type="header" data-elementor-id="39" className="elementor elementor-39 elementor-location-header" data-elementor-post-type="elementor_library">
<div className="elementor-element elementor-element-1dd58e8 e-flex e-con-boxed e-con e-parent" data-id="1dd58e8" data-element_type="container" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-86c8447 e-con-full e-flex e-con e-child" data-id="86c8447" data-element_type="container">
<div className="elementor-element elementor-element-b6b3e85 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="b6b3e85" data-element_type="widget" data-widget_type="image.default">
<div className="elementor-widget-container">
<a href="/">
<img fetchPriority="high" width={800} height={454} src="/images/llv-logo.png" className="attachment-large size-large wp-image-1220" alt="" sizes="(max-width: 800px) 100vw, 800px" /> </a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-82a9cd6 e-con-full e-flex e-con e-child" data-id="82a9cd6" data-element_type="container" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-ec6e6ee elementor-mobile-align-center elementor-align-right elementor-list-item-link-inline elementor-widget elementor-widget-icon-list" data-id="ec6e6ee" data-element_type="widget" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<a href="tel:+33765547394">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-icon-list-text">+33 7 65 54 73 94</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</header>
<div data-elementor-type="wp-page" data-elementor-id="75" className="elementor elementor-75" data-elementor-post-type="page">
<div className="elementor-element elementor-element-d0185a2 e-flex e-con-boxed e-con e-parent" data-id="d0185a2" data-element_type="container">
<div className="e-con-inner">
<div className="elementor-element elementor-element-21900073 elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="21900073" data-element_type="widget" data-widget_type="theme-page-title.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Mentions légales</h1> </div>
</div>
<div className="elementor-element elementor-element-f73af03 elementor-widget elementor-widget-text-editor" data-id="f73af03" data-element_type="widget" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p><b>Société :</b> La ligne du VTC<br /><b>Numéro de SIRET</b>: 92273211000015<br /><b>Numéro TVA Intracommunautaire : </b>FR60922732110<br /><b>Responsable éditorial :</b> M. Oilide KERKENNI<br /><b>Adresse : </b>8 RUE DE LA CORREZE, 31880 LA SALVETAT-SAINT-GILLES<br /><b>Téléphone :</b>07 65 54 73 94<br /><b>Email : </b>contact@laligneduvtc.fr</p><h4>Hébergement</h4><p><b>Hébergeur :</b> Hostinger<br /><b>Site Web : </b>www.hostinger.com</p> </div>
</div>
</div>
</div>
</div>
<footer data-elementor-type="footer" data-elementor-id="50" className="elementor elementor-50 elementor-location-footer" data-elementor-post-type="elementor_library">
<div className="elementor-element elementor-element-2d955e0 e-flex e-con-boxed e-con e-parent" data-id="2d955e0" data-element_type="container" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-358a13c e-con-full e-flex e-con e-child" data-id="358a13c" data-element_type="container">
<div className="elementor-element elementor-element-8026a28 elementor-mobile-align-center elementor-align-center elementor-list-item-link-inline elementor-widget elementor-widget-icon-list" data-id="8026a28" data-element_type="widget" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<a href="mailto:contact@laligneduvtc.fr">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg> </span>
<span className="elementor-icon-list-text">contact@laligneduvtc.fr</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div className="elementor-element elementor-element-86eb4b0 e-con-full e-flex e-con e-child" data-id="86eb4b0" data-element_type="container">
<div className="elementor-element elementor-element-ebfd6fd elementor-mobile-align-center elementor-align-center elementor-list-item-link-inline elementor-widget elementor-widget-icon-list" data-id="ebfd6fd" data-element_type="widget" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<a href="tel:+33765547394">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-icon-list-text">+33 7 65 54 73 94</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-54e5fd9 e-flex e-con-boxed e-con e-parent" data-id="54e5fd9" data-element_type="container" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-6af26c9 e-con-full e-flex e-con e-child" data-id="6af26c9" data-element_type="container">
<div className="elementor-element elementor-element-f0939b9 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="f0939b9" data-element_type="widget" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h5 className="elementor-heading-title elementor-size-default">Liens utiles</h5> </div>
</div>
<div className="elementor-element elementor-element-f64ff4d elementor-nav-menu__align-center elementor-nav-menu--dropdown-none elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-nav-menu" data-id="f64ff4d" data-element_type="widget" data-settings={`{"layout":"horizontal","submenu_icon":{"value":"<svg aria-hidden=\"true\" class=\"e-font-icon-svg e-fas-caret-down\" viewBox=\"0 0 320 512\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"><path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"><\/path><\/svg>","library":"fa-solid"}}`} data-widget_type="nav-menu.default">
<div className="elementor-widget-container">
<nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
<ul id="menu-1-f64ff4d" className="elementor-nav-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94"><a href="https://etancheite-grand-paris.fr" className="elementor-item">Nos services</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"><a href="https://etancheite-grand-paris.fr/etancheite-toiture-terrasse-qualite.html" className="elementor-item">Qualité & recommandations étanchéité</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96"><a href="/mentions-legales" className="elementor-item">Mentions légales</a></li>
</ul> </nav>
<nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
<ul id="menu-2-f64ff4d" className="elementor-nav-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94"><a href="https://etancheite-grand-paris.fr" className="elementor-item" tabIndex={-1}>Nos services</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"><a href="https://etancheite-grand-paris.fr/etancheite-toiture-terrasse-qualite.html" className="elementor-item" tabIndex={-1}>Qualité & recommandations étanchéité</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96"><a href="/mentions-legales" className="elementor-item" tabIndex={-1}>Mentions légales</a></li>
</ul> </nav>
</div>
</div>
<div className="elementor-element elementor-element-36b00c6 elementor-widget elementor-widget-text-editor" data-id="36b00c6" data-element_type="widget" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									La Ligne du VTC 2026 © Tous droits réservés. <a style={{ color: "white", textDecoration: "underline !important" }} href="/mentions-legales">Mentions légales</a> </div>
</div>
</div>
</div>
</div>
</footer>






















    </div>
  );
}
