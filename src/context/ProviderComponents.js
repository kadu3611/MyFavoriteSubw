import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ContextHomePage from './ContextComponents';

export default function ProviderComponents({ children }) {

  const [selectOptionPao, setSelectOptionPao] = useState("");
  const [genericAntes, setGenericAntes] = useState([]);
  const [genericApos, setGenericApos] = useState([]);
  const [xbuttonRecheioBefore, setXbuttonRecheioBefore] = useState([]);
  const [xbuttonRecheioAfter, setXbuttonRecheioAfter] = useState([]);
  const [xbuttonAcrescimosBefore, setXbuttonAcrescimosBefore] = useState([])
  const [xbuttonAcrescimosAfter, setXbuttonAcrescimosAfter] = useState([])
  const [selectCheckboxSaladBefore, setSelectCheckboxaladBefore] = useState([]);
  const [selectCheckboxSaladAfter, setSelectCheckboxaladAfter] = useState([]);
  const [selectCheckboxTemperoBefore, setSelectCheckboxTemperoBefore] = useState([]);
  const [selectCheckboxTemperoAfter, setSelectCheckboxTemperoAfter] = useState([]);
  const [selectCheckboxMolhosBefore, setSelectCheckboxMolhosBefore] = useState([]);
  const [selectCheckboxMolhosAfter, setSelectCheckboxMolhosAfter] = useState([]);
  const [nameContext, setNameContext] = useState([""])

console.log(genericAntes, "genericAntes no Provider");
console.log(genericApos, "genericApos no Provider");

  const contextComponents = useMemo(() => ({
    selectOptionPao,
    setSelectOptionPao,
    genericAntes,
    setGenericAntes,
    genericApos,
    setGenericApos,
    xbuttonRecheioBefore, setXbuttonRecheioBefore,
    selectCheckboxSaladBefore, setSelectCheckboxaladBefore,
    selectCheckboxTemperoBefore, setSelectCheckboxTemperoBefore,
    selectCheckboxMolhosBefore, setSelectCheckboxMolhosBefore,
    xbuttonRecheioAfter, setXbuttonRecheioAfter,
    xbuttonAcrescimosBefore, setXbuttonAcrescimosBefore,
    xbuttonAcrescimosAfter, setXbuttonAcrescimosAfter,
    selectCheckboxSaladAfter, setSelectCheckboxaladAfter,
    selectCheckboxTemperoAfter, setSelectCheckboxTemperoAfter,
    selectCheckboxMolhosAfter, setSelectCheckboxMolhosAfter,
    nameContext, setNameContext

}),[
    selectOptionPao,
    setSelectOptionPao,
    genericAntes,
    setGenericAntes,
    genericApos,
    setGenericApos,
    xbuttonRecheioBefore, setXbuttonRecheioBefore,
    selectCheckboxSaladBefore, setSelectCheckboxaladBefore,
    selectCheckboxTemperoBefore, setSelectCheckboxTemperoBefore,
    selectCheckboxMolhosBefore, setSelectCheckboxMolhosBefore,
    xbuttonRecheioAfter, setXbuttonRecheioAfter,
    xbuttonAcrescimosBefore, setXbuttonAcrescimosBefore,
    xbuttonAcrescimosAfter, setXbuttonAcrescimosAfter,
    selectCheckboxSaladAfter, setSelectCheckboxaladAfter,
    selectCheckboxTemperoAfter, setSelectCheckboxTemperoAfter,
    selectCheckboxMolhosAfter, setSelectCheckboxMolhosAfter,
    nameContext, setNameContext

  ]);

  return (
    <ContextHomePage.Provider value={ contextComponents }>
      { children }
    </ContextHomePage.Provider>
  );
}
ProviderComponents.propTypes = {
  children: PropTypes.node.isRequired,
};
