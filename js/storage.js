const DB_KEY='smartFinancePlannerDB';const SESSION_KEY='smartFinanceSession';
function defaultDB(){return {users:[],currentUser:null,profile:null,income:{salary:0,otherIncome:0,salaryDate:1,currency:'INR'},savingsPlan:{monthlySavings:0,goalAmount:0,targetDate:''},transactions:[],budgets:{},savingsGoals:[],settings:{darkMode:false}}}
function getDB(){try{return JSON.parse(localStorage.getItem(DB_KEY))||defaultDB()}catch(e){return defaultDB()}}
function saveDB(db){localStorage.setItem(DB_KEY,JSON.stringify(db))}
function currencySymbol(){const c=getDB().income.currency||'INR';return {INR:'₹',USD:'$',EUR:'€',GBP:'£'}[c]||c}
function money(n){return currencySymbol()+Number(n||0).toLocaleString('en-IN',{maximumFractionDigits:2})}
function getSession(){return localStorage.getItem(SESSION_KEY)}
function setSession(email,remember){if(remember)localStorage.setItem(SESSION_KEY,email);else sessionStorage.setItem(SESSION_KEY,email)}
function clearSession(){localStorage.removeItem(SESSION_KEY);sessionStorage.removeItem(SESSION_KEY)}
function activeEmail(){return localStorage.getItem(SESSION_KEY)||sessionStorage.getItem(SESSION_KEY)}
function requireAuth(){if(!activeEmail())location.href='index.html'}
