/* app.js - lightweight front-end for AgriAdvisor demo */
const DEV_MODE = true; // set false for production


// ---------- TRANSLATIONS (core UI texts) ----------
// Provide English and Hindi fully; other languages are left as placeholders
const translations = {
en: {
select_language: 'Select language',
login_title:'Login',
label_name:'Name', ph_name:'Full name',
label_phone:'Phone number', btn_send_otp:'Send OTP',
label_otp:'Enter OTP', btn_verify_otp:'Verify',
login_success:'Logged in', login_failed:'OTP failed',
app_title:'Crop Advisory', label_crop_type:'Crop category', label_crop_variety:'Crop variety',
label_location:'Location (lat,lon)', btn_get_weather:'Get weather & suitability',
weather_current:'Current weather', suitability_good:'Suitable', suitability_bad:'Not suitable',
label_upload:'Upload plant photo', drop_hint:'Drag & drop or click to upload', btn_analyze:'Analyze Image',
btn_get_market:'Get Market Prices', label_market:'Market price', btn_read_aloud:'Read aloud'
},
hi: {
select_language: 'भाषा चुनें',
login_title:'लॉगिन',
label_name:'नाम', ph_name:'पूरा नाम',
label_phone:'फ़ोन नंबर', btn_send_otp:'OTP भेजें',
label_otp:'OTP दर्ज करें', btn_verify_otp:'सत्यापित करें',
login_success:'लॉगइन सफल', login_failed:'OTP विफल',
app_title:'फ़सल सलाह', label_crop_type:'फसल श्रेणी', label_crop_variety:'फसल प्रकार',
label_location: