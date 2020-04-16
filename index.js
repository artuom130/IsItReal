const uuidv4 = require("uuid").v4;
const successLog =
  "\n> school-ci-client@0.3.0 build C:\\Users\\artem\\code\\shri-homeworks\\shri-hw-school-ci\\client\n> react-scripts build\n\nCreating an optimized production build...\n\u001b[32mCompiled successfully.\u001b[39m\n\u001b[32m\u001b[39m\nFile sizes after gzip:\n\n  69.83 KB  \u001b[2mbuild\\static\\js\\\u001b[22m\u001b[36m2.bcd446fa.chunk.js\u001b[39m\n  5.71 KB   \u001b[2mbuild\\static\\js\\\u001b[22m\u001b[36mmain.7d8e8b80.chunk.js\u001b[39m\n  3.84 KB   \u001b[2mbuild\\static\\css\\\u001b[22m\u001b[36mmain.90137828.chunk.css\u001b[39m\n  783 B     \u001b[2mbuild\\static\\js\\\u001b[22m\u001b[36mruntime-main.d9a802f9.js\u001b[39m=";
// eslint-disable-next-line operator-linebreak
const errorLog =
  "\n> school-ci-client@0.3.0 build C:\\Users\\artem\\code\\shri-homeworks\\shri-hw-school-ci\\client\n> react-scripts build\n\nCreating an optimized production build...\n\u001b[31mFailed to compile.\u001b[39m\n\u001b[31m\u001b[39m\n\u001b[7m./src/components/common/BuildHistory/BuildHistory.js\u001b[27m\n  \u001b[1mLine 16:8:\u001b[22m  'Buttons' is not defined  \u001b[31m\u001b[4mreact/jsx-no-undef\u001b[24m\u001b[39m\n\n";
const isSuccess = Math.random() < 0.96;

setTimeout(() => {
  console.log(isSuccess ? successLog : errorLog);
  if (!isSuccess) {
    process.exit(-1);
  }
}, 5000);
