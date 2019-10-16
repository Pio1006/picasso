var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { Button } from '@toptal/picasso';
import { useNotifications } from '@toptal/picasso/utils';
import { useModals } from '@toptal/picasso/lab/utils';
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const PromptModalDefaultExample = () => {
    const { showPrompt } = useModals();
    const { showInfo } = useNotifications();
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        const { result, hide, setLoading } = yield showPrompt('Confirm', 'Hello, World!', {
            submitText: 'OK',
            // for purpose of code example
            container: () => document.getElementById('modal-container')
        });
        // for example if result is true we need to do some async operation
        if (result && setLoading) {
            setLoading(true);
            yield timeout(2000);
            setLoading(false);
        }
        hide();
        showInfo(String(result));
    });
    return (React.createElement("div", { id: 'modal-container', style: { width: '400px', height: '50px' } },
        React.createElement(Button, { onClick: handleClick }, "Open prompt")));
};
export default PromptModalDefaultExample;
//# sourceMappingURL=Default.example.js.map