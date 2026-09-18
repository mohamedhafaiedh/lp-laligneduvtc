"use client";

import React, { useState } from "react";

export default function HomePage() {
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
    <div id="page-wrapper">
      

<a className="skip-link screen-reader-text" href="#content">Aller au contenu</a>
<header className="elementor elementor-39 elementor-location-header" data-elementor-id="39" data-elementor-post-type="elementor_library" data-elementor-type="header">
<div className="elementor-element elementor-element-1dd58e8 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="1dd58e8" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-86c8447 e-con-full e-flex e-con e-child" data-element_type="container" data-id="86c8447">
<div className="elementor-element elementor-element-b6b3e85 elementor-widget__width-auto elementor-widget elementor-widget-image" data-element_type="widget" data-id="b6b3e85" data-widget_type="image.default">
<div className="elementor-widget-container">
<a href="https://lp.laligneduvtc.fr">
<img alt="" className="attachment-large size-large wp-image-1220" fetchPriority="high" height={454} sizes="(max-width: 800px) 100vw, 800px" src="/images/llv-logo.png" width={800} /> </a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-82a9cd6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="82a9cd6" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-ec6e6ee elementor-mobile-align-center elementor-align-right elementor-list-item-link-inline elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="ec6e6ee" data-widget_type="icon-list.default">
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
<div className="elementor elementor-69" data-elementor-id="69" data-elementor-post-type="page" data-elementor-type="wp-page">
<div className="elementor-element elementor-element-b409504 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="b409504" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-51467e0 e-con-full e-flex e-con e-child" data-element_type="container" data-id="51467e0">
<div className="elementor-element elementor-element-2988a60 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-element_type="container" data-id="2988a60">
<div className="elementor-element elementor-element-fedec63 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="fedec63" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Noté 4.9/5 sur Google</p> </div>
</div>
<div className="elementor-element elementor-element-ba33602 elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-widget elementor-widget-rating" data-element_type="widget" data-id="ba33602" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Noté 5 sur 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-76d7ec6 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="76d7ec6" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">Chauffeur privé à Toulouse : votre solution de transport personnalisée</h1> </div>
</div>
<div className="elementor-element elementor-element-e2b0b85 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="e2b0b85" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Prix fixés à l'avance</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Disponibilité 24h/24 et 7j/7</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Large flotte de véhicules</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Chauffeurs professionnels</span>
</li>
</ul>
</div>
</div>
</div>
<div className="elementor-element elementor-element-8197fca e-con-full e-flex e-con e-child" data-element_type="container" data-id="8197fca" data-settings={`{"background_background":"classic"}`} id="devis">
<div className="elementor-element elementor-element-9649147 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="9649147" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Demandez votre devis gratuit</h3> </div>
</div>
<div className="elementor-element elementor-element-13d16b7 devis elementor-button-align-stretch elementor-widget elementor-widget-global elementor-global-509 elementor-widget-form" data-element_type="widget" data-id="13d16b7" data-settings={`{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}`} data-widget_type="form.default">
<div className="elementor-widget-container">
<form aria-label="Formulaire VTC" className="elementor-form" method="post" name="Formulaire VTC">
<input name="post_id" type="hidden" defaultValue="69" />
<input name="form_id" type="hidden" defaultValue="13d16b7" />
<input name="referer_title" type="hidden" defaultValue="" />
<input name="queried_id" type="hidden" defaultValue="69" />
<div className="elementor-form-fields-wrapper elementor-labels-">
<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-address1 elementor-col-50 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-address1">
								Adresse de départ							</label>
<input className="elementor-field elementor-size-sm elementor-field-textual" id="form-field-address1" name="form_fields[address1]" placeholder="Adresse de départ*" required size={1} type="text" />
</div>
<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-address2 elementor-col-50 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-address2">
								Adresse d'arrivée							</label>
<input className="elementor-field elementor-size-sm elementor-field-textual" id="form-field-address2" name="form_fields[address2]" placeholder="Adresse d'arrivée*" required size={1} type="text" />
</div>
<div className="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-date_depart elementor-col-50 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-date_depart">
								Date							</label>
<input className="elementor-field elementor-size-sm elementor-field-textual elementor-date-field elementor-use-native" id="form-field-date_depart" name="form_fields[date_depart]" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" placeholder="Date*" required type="date" />
</div>
<div className="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-heure_depart elementor-col-50 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-heure_depart">
								Heure							</label>
<input className="elementor-field elementor-size-sm elementor-field-textual elementor-time-field elementor-use-native" id="form-field-heure_depart" name="form_fields[heure_depart]" placeholder="Heure*" required type="time" />
</div>
<div className="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-typevoiture elementor-col-100 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-typevoiture">
								Voiture							</label>
<div className="elementor-field elementor-select-wrapper remove-before">
<div className="select-caret-down-wrapper">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.4 571.4"><path d="M571 393Q571 407 561 418L311 668Q300 679 286 679T261 668L11 418Q0 407 0 393T11 368 36 357H536Q550 357 561 368T571 393Z"></path></svg> </div>
<select className="elementor-field-textual elementor-size-sm" id="form-field-typevoiture" name="form_fields[typevoiture]" required>
<option defaultValue="Berline (3 pax)">Berline (3 pax)</option>
<option defaultValue="Van (7 pax)">Van (7 pax)</option>
</select>
</div>
</div>
<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-email">
								Email							</label>
<input className="elementor-field elementor-size-sm elementor-field-textual" id="form-field-email" name="form_fields[email]" placeholder="Votre email*" required size={1} type="email" />
</div>
<div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-phone elementor-col-50 elementor-field-required">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-phone">
								Téléphone							</label>
<input className="elementor-field elementor-size-sm elementor-field-textual" id="form-field-phone" name="form_fields[phone]" pattern="[0-9()#&+*-=.]+" placeholder="Votre téléphone*" required size={1} title="Seuls les caractères de numéros de téléphone (#, -, *, etc.) sont acceptés." type="tel" />
</div>
<div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
<label className="elementor-field-label elementor-screen-only" htmlFor="form-field-message">
								Message							</label>
<textarea className="elementor-field-textual elementor-field elementor-size-sm" id="form-field-message" name="form_fields[message]" placeholder="Informations additionnelles" rows={3}></textarea> </div>
<div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-distance elementor-col-100">
<input className="elementor-field elementor-size-sm elementor-field-textual" id="form-field-distance" name="form_fields[distance]" size={1} type="hidden" />
</div>
<div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-prix elementor-col-100">
<input className="elementor-field elementor-size-sm elementor-field-textual" id="form-field-prix" name="form_fields[prix]" size={1} type="hidden" />
</div>
<div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
<button className="elementor-button elementor-size-sm" type="submit">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d521dcc e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="d521dcc">
<div className="e-con-inner">
<div className="elementor-element elementor-element-9176350 e-con-full e-flex e-con e-child" data-element_type="container" data-id="9176350">
<div className="elementor-element elementor-element-2fce2af e-con-full e-flex e-con e-child" data-element_type="container" data-id="2fce2af">
<div className="elementor-element elementor-element-04ceb97 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="04ceb97" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Une équipe professionnelle pour des trajets en toute sérénité</h2> </div>
</div>
<div className="elementor-element elementor-element-750e6ab elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="750e6ab" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="font-claude-message relative leading-[1.65rem] [&>div>div>:is(p,ul,ol)]:pr-4 md:[&>div>div>:is(p,ul,ol)]:pr-8 [&_pre>div]:bg-bg-300 [&_.ignore-pre-bg>div]:bg-transparent"><div><div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0"><p className="whitespace-pre-wrap break-words">Voyagez en toute tranquillité avec notre service de transport privé. Notre flotte contemporaine et nos conducteurs expérimentés vous garantissent ponctualité et confort optimal lors de chaque déplacement.</p></div></div></div> </div>
</div>
<div className="elementor-element elementor-element-231af56 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="231af56" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Paiements à bord ou en ligne</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Annulation gratuite avant 24h</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span className="elementor-icon-list-text">Prestation personnalisée</span>
</li>
</ul>
</div>
</div>
</div>
<div className="elementor-element elementor-element-4c7f7e7 e-con-full e-flex e-con e-child" data-element_type="container" data-id="4c7f7e7">
<div className="elementor-element elementor-element-8fed456 elementor-widget elementor-widget-image" data-element_type="widget" data-id="8fed456" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-1270" decoding="async" height={300} sizes="(max-width: 450px) 100vw, 450px" src="/images/22-1.jpg" width={450} /> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a18af29 e-con-full e-flex e-con e-child" data-element_type="container" data-id="a18af29">
<div className="elementor-element elementor-element-679181f elementor-align-center elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-848 elementor-widget-button" data-element_type="widget" data-id="679181f" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+33765547394">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-button-text">+33 7 65 54 73 94</span>
</span>
</a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a57d440 elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-855 elementor-widget-button" data-element_type="widget" data-id="a57d440" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-344e0379 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="344e0379" id="services">
<div className="e-con-inner">
<div className="elementor-element elementor-element-3b936b06 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3b936b06">
<div className="elementor-element elementor-element-78e42035 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="78e42035" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Nos services</h2> </div>
</div>
<div className="elementor-element elementor-element-45ccdc2 e-grid e-con-full e-con e-child" data-element_type="container" data-id="45ccdc2">
<div className="elementor-element elementor-element-17fe6f6 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="17fe6f6" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-a16646f elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="a16646f" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-plane-arrival" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM44.81 205.66l88.74 80a62.607 62.607 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36 29.67-8.27 43.44-21.21 47.25-35.71 3.83-14.5-1.73-32.71-23.37-54.96-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21-102.2-27.84-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25z"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							 Transferts						</span>
</h3>
<p className="elementor-icon-box-description">
<br />Transferts en ville
<br />Transferts aéroports
<br />Transferts gares
<br />Déplacements professionnels
<br />Trajets longues distances					</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c72e5c0 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="c72e5c0" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-25aa524 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-element_type="widget" data-id="25aa524" data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon">
<span className="elementor-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-stopwatch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"></path></svg> </span>
</div>
<div className="elementor-icon-box-content">
<h3 className="elementor-icon-box-title">
<span>
							Mises à disposition						</span>
</h3>
<p className="elementor-icon-box-description">
<br />Voiture et chauffeur à disposition 
<br />Visites touristiques
<br /> Evènements privés
<br />Sorties shopping					</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-214e e-con-full e-flex e-con e-child" data-element_type="container" data-id="214e">
<div className="elementor-element elementor-element-b495ad5 elementor-align-center elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-848 elementor-widget-button" data-element_type="widget" data-id="b495ad5" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+33765547394">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-button-text">+33 7 65 54 73 94</span>
</span>
</a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-bd33ee7 elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-855 elementor-widget-button" data-element_type="widget" data-id="bd33ee7" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-86cfd44 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="86cfd44" data-settings={`{"background_background":"classic"}`} id="flotte">
<div className="e-con-inner">
<div className="elementor-element elementor-element-b2c49c6 e-con-full e-flex e-con e-child" data-element_type="container" data-id="b2c49c6">
<div className="elementor-element elementor-element-f6cfe18 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="f6cfe18" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Notre flotte</h2> </div>
</div>
<div className="elementor-element elementor-element-c59f630 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="c59f630" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="font-claude-message relative leading-[1.65rem] [&>div>div>:is(p,ul,ol)]:pr-4 md:[&>div>div>:is(p,ul,ol)]:pr-8 [&_pre>div]:bg-bg-300 [&_.ignore-pre-bg>div]:bg-transparent"><div><div className="grid-cols-1 grid gap-2.5 [&_>_*]:min-w-0"><p className="whitespace-pre-wrap break-words">Notre flotte diversifiée s’adapte à toutes vos attentes. Que vous voyagiez seul, en duo ou en groupe, notre service de transport privé vous propose la solution idéale. Chacun de nos véhicules vous garantit un trajet alliant confort et fiabilité.</p></div></div></div> </div>
</div>
<div className="elementor-element elementor-element-e508633 e-grid e-con-boxed e-con e-child" data-element_type="container" data-id="e508633">
<div className="e-con-inner">
<div className="elementor-element elementor-element-d5b991f e-con-full e-flex e-con e-child" data-element_type="container" data-id="d5b991f" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-6a885b2 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="6a885b2" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Berline</h3> </div>
</div>
<div className="elementor-element elementor-element-ad4b3a2 elementor-widget__width-auto elementor-widget elementor-widget-image" data-element_type="widget" data-id="ad4b3a2" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-575" decoding="async" height={340} sizes="(max-width: 439px) 100vw, 439px" src="/images/eclass.png" width={439} /> </div>
</div>
<div className="elementor-element elementor-element-bf4d32f elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="bf4d32f" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-users" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg> </span>
<span className="elementor-icon-list-text">Jusqu'à 3 passagers</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-suitcase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path></svg> </span>
<span className="elementor-icon-list-text">Jusqu'à 3 bagages</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg> </span>
<span className="elementor-icon-list-text">Wi-Fi</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-power-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg> </span>
<span className="elementor-icon-list-text">Recharge électrique</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-baby" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z"></path></svg> </span>
<span className="elementor-icon-list-text">Sièges enfant et bébé</span>
</li>
</ul>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a02b49f e-con-full e-flex e-con e-child" data-element_type="container" data-id="a02b49f" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-4d36d80 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="4d36d80" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Van</h3> </div>
</div>
<div className="elementor-element elementor-element-40dfd31 elementor-widget__width-auto elementor-widget elementor-widget-image" data-element_type="widget" data-id="40dfd31" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-577" decoding="async" height={340} loading="lazy" sizes="(max-width: 439px) 100vw, 439px" src="/images/V-Class.png" width={439} /> </div>
</div>
<div className="elementor-element elementor-element-b36fe71 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="b36fe71" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-users" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg> </span>
<span className="elementor-icon-list-text">Jusqu'à 8 passagers</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-suitcase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path></svg> </span>
<span className="elementor-icon-list-text">Jusqu'à 7 bagages</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg> </span>
<span className="elementor-icon-list-text">Wi-Fi</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-power-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg> </span>
<span className="elementor-icon-list-text">Recharge électrique</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-baby" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z"></path></svg> </span>
<span className="elementor-icon-list-text">Sièges enfant et bébé</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-a933768 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-element_type="container" data-id="a933768">
<div className="elementor-element elementor-element-2fc5850 elementor-align-center elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-848 elementor-widget-button" data-element_type="widget" data-id="2fc5850" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+33765547394">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-button-text">+33 7 65 54 73 94</span>
</span>
</a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-15a4f78 elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-855 elementor-widget-button" data-element_type="widget" data-id="15a4f78" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-263444b elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="263444b" id="avis">
<div className="e-con-inner">
<div className="elementor-element elementor-element-5daa7fa e-con-full e-flex e-con e-child" data-element_type="container" data-id="5daa7fa">
<div className="elementor-element elementor-element-e879bec elementor-widget elementor-widget-heading" data-element_type="widget" data-id="e879bec" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Quelques mots de nos clients​</h2> </div>
</div>
<div className="elementor-element elementor-element-04d74e0 e-con-full e-flex e-con e-child" data-element_type="container" data-id="04d74e0">
<div className="elementor-element elementor-element-06f1ac3 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="06f1ac3" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>Centrale VTC Toulouse est notée 4.9/5 sur Google</p> </div>
</div>
<div className="elementor-element elementor-element-d467bba elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-widget elementor-widget-rating" data-element_type="widget" data-id="d467bba" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Noté 5 sur 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-65f3f41 e-grid e-con-full e-con e-child" data-element_type="container" data-id="65f3f41">
<div className="elementor-element elementor-element-b3bd187 e-flex e-con-boxed e-con e-child" data-element_type="container" data-id="b3bd187" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-b289bac e-con-full e-flex e-con e-child" data-element_type="container" data-id="b289bac">
<div className="elementor-element elementor-element-23e1fc4 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="23e1fc4" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Paul Rizk</h3> </div>
</div>
<div className="elementor-element elementor-element-a6655e6 elementor-widget elementor-widget-rating" data-element_type="widget" data-id="a6655e6" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Noté 5 sur 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0450f50 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="0450f50" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									Je suis très satisfait du service de ce vtc. Le chauffeur était sympathique et m’a aidé avec mes bagages. Le véhicule était confortable et propre, et le trajet s’est déroulé en toute sécurité. Le prix était également raisonnable. Je n’hésiterai pas à utiliser à nouveau ce service lors de mes déplacements.								</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-cccb3cd e-con-full e-flex e-con e-child" data-element_type="container" data-id="cccb3cd" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-7700317 e-con-full e-flex e-con e-child" data-element_type="container" data-id="7700317">
<div className="elementor-element elementor-element-ef2b9aa elementor-widget elementor-widget-heading" data-element_type="widget" data-id="ef2b9aa" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Djamal Kati</h3> </div>
</div>
<div className="elementor-element elementor-element-c1543cb elementor-widget elementor-widget-rating" data-element_type="widget" data-id="c1543cb" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Noté 5 sur 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-25d4e21 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="25d4e21" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									Par le biais de mon activité professionnelle, mes collaborateurs ou moi même faisons régulièrement le trajet Albi- Aéroport de Toulouse Blagnac avec cette compagnie de chauffeur privé et nous en sommes très satisfait.
Chauffeur ponctuel, professionnel, berlines et vans confortables.
Je recommande								</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-061183c e-con-full e-flex e-con e-child" data-element_type="container" data-id="061183c" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-3b05b03 e-con-full e-flex e-con e-child" data-element_type="container" data-id="3b05b03">
<div className="elementor-element elementor-element-1c07e84 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1c07e84" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Elisa Als</h3> </div>
</div>
<div className="elementor-element elementor-element-70ed0ea elementor-widget elementor-widget-rating" data-element_type="widget" data-id="70ed0ea" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Noté 5 sur 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-6505901 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="6505901" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									Tout s’est super bien passé, l’organisation entre les chauffeurs est au top, ils sont ponctuels et accueillant. Les voitures et van sont très propres. Nous avons même eu le droit à une « visière guidée » et le chauffeur nous a même ouvert la porte pour que nous puissions prendre des photos de meilleurs qualité. Je recommande sans hésiter, encore merci à eux tous.
								</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-fbac37d e-con-full e-flex e-con e-child" data-element_type="container" data-id="fbac37d" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-95ad641 e-con-full e-flex e-con e-child" data-element_type="container" data-id="95ad641">
<div className="elementor-element elementor-element-2c829c8 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="2c829c8" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">Kyle Rise</h3> </div>
</div>
<div className="elementor-element elementor-element-e58740b elementor-widget elementor-widget-rating" data-element_type="widget" data-id="e58740b" data-widget_type="rating.default">
<div className="elementor-widget-container">
<div className="e-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
<meta content="0" itemProp="worstRating" />
<meta content="5" itemProp="bestRating" />
<div aria-label="Noté 5 sur 5" className="e-rating-wrapper" content="5" itemProp="ratingValue" role="img">
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div className="e-icon">
<div className="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div className="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" className="e-font-icon-svg e-eicon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1269adb elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="1269adb" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									J’ai fait appel à Centrale VTC Toulouse pour un service de transport car ma société organiser un séminaire au alentours de Toulouse et tout était parfait, les chauffeurs, les véhicules, la conduite. En plus de la ponctualité. Ils ont su répondre à nos demandes de dernière minute. Vraiment, je recommande cette société de transport qui est d’après moi, la meilleure à Toulouse ! 🤩 👍🏼								</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1a7eadd e-con-full e-flex e-con e-child" data-element_type="container" data-id="1a7eadd">
<div className="elementor-element elementor-element-d14ec7e elementor-align-center elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-848 elementor-widget-button" data-element_type="widget" data-id="d14ec7e" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+33765547394">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-button-text">+33 7 65 54 73 94</span>
</span>
</a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-09873ab elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-855 elementor-widget-button" data-element_type="widget" data-id="09873ab" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-ab4a924 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="ab4a924" id="zones">
<div className="e-con-inner">
<div className="elementor-element elementor-element-62d9e1c e-con-full e-flex e-con e-child" data-element_type="container" data-id="62d9e1c">
<div className="elementor-element elementor-element-c319a11 e-con-full e-flex e-con e-child" data-element_type="container" data-id="c319a11">
<div className="elementor-element elementor-element-7d3933b elementor-widget elementor-widget-heading" data-element_type="widget" data-id="7d3933b" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Nos zones d'intervention</h2> </div>
</div>
<div className="elementor-element elementor-element-578b34f elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="578b34f" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<article className="w-full text-token-text-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px] sm:AIPRM__conversation__response" data-scroll-anchor="true" data-testid="conversation-turn-3" dir="auto"><div className="text-base my-auto mx-auto py-[18px] px-6"><div className="mx-auto flex flex-1 text-base gap-4 md:gap-5 lg:gap-6 md:max-w-3xl"><div className="group/conversation-turn relative flex w-full min-w-0 flex-col agent-turn @xs/thread:px-0 @sm/thread:px-1.5 @md/thread:px-4"><div className="flex-col gap-1 md:gap-3"><div className="flex max-w-full flex-col flex-grow AIPRM__conversation__response"><div className="min-h-8 text-message relative flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&]:mt-5" data-message-author-role="assistant" data-message-id="dcb848eb-1dd3-40a7-9844-c9e6cb275b3b" data-message-model-slug="gpt-4o-mini" dir="auto"><div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]"><div className="markdown prose w-full break-words dark:prose-invert light"><p data-end="248" data-is-last-node="" data-is-only-node="" data-start="0">Notre service de chauffeur privé VTC couvre toute l’agglomération de Toulouse ainsi qu’un rayon de 40 km autour de la ville, incluant également des villes voisines pour lesquelles nous proposons des prestations de transport depuis et vers Toulouse.</p></div></div></div></div></div></div></div></div></article> </div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-460c8d4 e-con-full e-flex e-con e-child" data-element_type="container" data-id="460c8d4">
<div className="elementor-element elementor-element-22233bb elementor-align-center elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-848 elementor-widget-button" data-element_type="widget" data-id="22233bb" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+33765547394">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-button-text">+33 7 65 54 73 94</span>
</span>
</a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-f3a446a elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-855 elementor-widget-button" data-element_type="widget" data-id="f3a446a" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-bee5c2d e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="bee5c2d" id="contact">
<div className="e-con-inner">
<div className="elementor-element elementor-element-1d28e82 elementor-widget elementor-widget-heading" data-element_type="widget" data-id="1d28e82" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Comment réserver votre chauffeur ?</h2> </div>
</div>
<div className="elementor-element elementor-element-15b9e5e e-con-full e-flex e-con e-child" data-element_type="container" data-id="15b9e5e">
<div className="elementor-element elementor-element-e957609 e-grid e-con-full e-con e-child" data-element_type="container" data-id="e957609">
<div className="elementor-element elementor-element-89f2520 e-con-full e-flex e-con e-child" data-element_type="container" data-id="89f2520" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-815ce1d elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="815ce1d" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" className="attachment-full size-full wp-image-526" decoding="async" height={64} loading="lazy" src="/images/communiquer.png" width={64} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Formulaire en ligne</h3><p className="elementor-image-box-description">Renseignez le  <a href="#devis">formulaire en ligne </a> du site avec des informations précises et nous reviendrons vers vous avec notre meilleur tarif.</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-e60be74 e-con-full e-flex e-con e-child" data-element_type="container" data-id="e60be74" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-293d726 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="293d726" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" className="attachment-full size-full wp-image-526" decoding="async" height={64} loading="lazy" src="/images/communiquer.png" width={64} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Téléphone</h3><p className="elementor-image-box-description">Vous avez la possibilité de nous appeler directement par téléphone au  :<br /> <a href="tel:+33765547394">+33 7 65 54 73 94</a>
</p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-cdcbd21 e-con-full e-flex e-con e-child" data-element_type="container" data-id="cdcbd21" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-d98d782 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="d98d782" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" className="attachment-full size-full wp-image-526" decoding="async" height={64} loading="lazy" src="/images/communiquer.png" width={64} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">WhatsApp</h3><p className="elementor-image-box-description">Nous sommes joignables également sur WhatsApp :<br /> <a href="https://wa.me/+33765547394">+33 7 65 54 73 94</a></p></div></div> </div>
</div>
</div>
<div className="elementor-element elementor-element-cc5913b e-con-full e-flex e-con e-child" data-element_type="container" data-id="cc5913b" data-settings={`{"background_background":"classic"}`}>
<div className="elementor-element elementor-element-ce94b93 elementor-position-top elementor-widget elementor-widget-image-box" data-element_type="widget" data-id="ce94b93" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" className="attachment-full size-full wp-image-526" decoding="async" height={64} loading="lazy" src="/images/communiquer.png" width={64} /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">E-mail</h3><p className="elementor-image-box-description">Vous pouvez nous écrire directement à l'adresse : <br /><a href="mailto:contact@laligneduvtc.fr">contact@laligneduvtc.fr</a></p></div></div> </div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-d20f574 e-con-full e-flex e-con e-child" data-element_type="container" data-id="d20f574">
<div className="elementor-element elementor-element-e1c7d0a elementor-align-center elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-848 elementor-widget-button" data-element_type="widget" data-id="e1c7d0a" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:+33765547394">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg> </span>
<span className="elementor-button-text">+33 7 65 54 73 94</span>
</span>
</a>
</div>
</div>
</div>
<div className="elementor-element elementor-element-1551d26 elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-global elementor-global-855 elementor-widget-button" data-element_type="widget" data-id="1551d26" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">J'obtiens mon devis gratuit</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c076fb5 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="c076fb5">
<div className="e-con-inner">
<div className="elementor-element elementor-element-043a20f e-con-full e-flex e-con e-child" data-element_type="container" data-id="043a20f">
<div className="elementor-element elementor-element-8978709 elementor-widget elementor-widget-image" data-element_type="widget" data-id="8978709" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-1271" decoding="async" height={300} loading="lazy" sizes="(max-width: 450px) 100vw, 450px" src="/images/22-2.jpg" width={450} /> </div>
</div>
</div>
<div className="elementor-element elementor-element-6a7d09c e-con-full e-flex e-con e-child" data-element_type="container" data-id="6a7d09c">
<div className="elementor-element elementor-element-85bc8cc elementor-widget elementor-widget-heading" data-element_type="widget" data-id="85bc8cc" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">Votre chauffeur VTC à Toulouse vous attend, réservez dès maintenant !
</h2> </div>
</div>
<div className="elementor-element elementor-element-837388d elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="837388d" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="flex max-w-full flex-col flex-grow AIPRM__conversation__response"><div className="min-h-[20px] text-message flex w-full flex-col items-end gap-2 whitespace-pre-wrap break-words [.text-message+&]:mt-5 overflow-x-auto" data-message-author-role="assistant" data-message-id="c016622c-a03b-44b8-8631-cbabfc5e5205" dir="auto"><div className="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]"><div className="markdown prose w-full break-words dark:prose-invert light"><p>Optez pour La Ligne du VTC et bénéficiez d’un trajet alliant confort, sécurité et fiabilité, avec des chauffeurs professionnels toujours à l’heure.</p></div></div></div></div> </div>
</div>
<div className="elementor-element elementor-element-efed6bb elementor-align-left elementor-widget__width-auto elementor-mobile-align-center elementor-widget elementor-widget-button" data-element_type="widget" data-id="efed6bb" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">Je commande mon chauffeur</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="elementor-section elementor-top-section elementor-element elementor-element-13ec43a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="13ec43a">
<div className="elementor-container elementor-column-gap-default">
</div>
</section>
</div>
<footer className="elementor elementor-50 elementor-location-footer" data-elementor-id="50" data-elementor-post-type="elementor_library" data-elementor-type="footer">
<div className="elementor-element elementor-element-2d955e0 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="2d955e0" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-358a13c e-con-full e-flex e-con e-child" data-element_type="container" data-id="358a13c">
<div className="elementor-element elementor-element-8026a28 elementor-mobile-align-center elementor-align-center elementor-list-item-link-inline elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="8026a28" data-widget_type="icon-list.default">
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
<div className="elementor-element elementor-element-86eb4b0 e-con-full e-flex e-con e-child" data-element_type="container" data-id="86eb4b0">
<div className="elementor-element elementor-element-ebfd6fd elementor-mobile-align-center elementor-align-center elementor-list-item-link-inline elementor-widget elementor-widget-icon-list" data-element_type="widget" data-id="ebfd6fd" data-widget_type="icon-list.default">
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
<div className="elementor-element elementor-element-54e5fd9 e-flex e-con-boxed e-con e-parent" data-element_type="container" data-id="54e5fd9" data-settings={`{"background_background":"classic"}`}>
<div className="e-con-inner">
<div className="elementor-element elementor-element-6af26c9 e-con-full e-flex e-con e-child" data-element_type="container" data-id="6af26c9">
<div className="elementor-element elementor-element-f0939b9 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-element_type="widget" data-id="f0939b9" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h5 className="elementor-heading-title elementor-size-default">Liens utiles</h5> </div>
</div>
<div className="elementor-element elementor-element-f64ff4d elementor-nav-menu__align-center elementor-nav-menu--dropdown-none elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-nav-menu" data-element_type="widget" data-id="f64ff4d" data-settings={`{"layout":"horizontal","submenu_icon":{"value":"<svg aria-hidden=\"true\" class=\"e-font-icon-svg e-fas-caret-down\" viewBox=\"0 0 320 512\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"><path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"><\/path><\/svg>","library":"fa-solid"}}`} data-widget_type="nav-menu.default">
<div className="elementor-widget-container">
<nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
<ul className="elementor-nav-menu" id="menu-1-f64ff4d"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94"><a className="elementor-item" href="https://etancheite-grand-paris.fr">Nos services</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"><a className="elementor-item" href="https://etancheite-grand-paris.fr/etancheite-toiture-terrasse-qualite.html">Qualité & recommandations étanchéité</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96"><a className="elementor-item" href="https://etancheite-grand-paris.fr/mentions-legales.html">Mentions légales</a></li>
</ul> </nav>
<nav aria-hidden="true" className="elementor-nav-menu--dropdown elementor-nav-menu__container">
<ul className="elementor-nav-menu" id="menu-2-f64ff4d"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-94"><a className="elementor-item" href="https://etancheite-grand-paris.fr" tabIndex={-1}>Nos services</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"><a className="elementor-item" href="https://etancheite-grand-paris.fr/etancheite-toiture-terrasse-qualite.html" tabIndex={-1}>Qualité & recommandations étanchéité</a></li>
<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-96"><a className="elementor-item" href="https://etancheite-grand-paris.fr/mentions-legales.html" tabIndex={-1}>Mentions légales</a></li>
</ul> </nav>
</div>
</div>
<div className="elementor-element elementor-element-36b00c6 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="36b00c6" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									La Ligne du VTC 2026 © Tous droits réservés. <a href="https://lp.laligneduvtc.fr/mentions-legales/" style={{ color: "white", textDecoration: "underline !important" }}>Mentions légales</a> </div>
</div>
</div>
</div>
</div>
</footer>


<link href="https://lp.laligneduvtc.fr/wp-content/plugins/elementor/assets/lib/flatpickr/flatpickr.min.css?ver=4.6.13" id="flatpickr-css" media="all" rel="stylesheet" />





















    </div>
  );
}
