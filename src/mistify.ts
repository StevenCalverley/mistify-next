import { installFactory } from './utils/plugins';
import components from './components';

const NAME = 'Mistify';

// --- Misitfy installer ---
const install = /*#__PURE__*/ installFactory({
  components,
});

// --- Misitfy plugin ---
const Misitfy = /*#__PURE__*/ {
  install,
  NAME,
};

export default Misitfy;
