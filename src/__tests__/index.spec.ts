import { describe, it, expect } from "vitest";
import { appTemplate } from "../index";
describe('appTemplate', () => {
    it('should contain the delay in the template', () => {
        const template = appTemplate('1000');
        expect(template).match(/"\/api\/1000"/);
    });
});