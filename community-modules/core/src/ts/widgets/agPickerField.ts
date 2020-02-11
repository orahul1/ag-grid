import { RefSelector } from "./componentAnnotations";
import { Autowired } from "../context/context";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
import { AgAbstractField } from "./agAbstractField";
import { _ } from "../utils";

export abstract class AgPickerField<T, K> extends AgAbstractField<K> {
    protected TEMPLATE =
        `<div class="ag-picker-field">
            <label ref="eLabel"></label>
            <div ref="eWrapper" class="ag-wrapper ag-picker-field-wrapper">
                <%displayField% ref="eDisplayField" class="ag-picker-field-display"></%displayField%>
                <button ref="eButton" class="ag-picker-field-button"> </button>
            </div>
        </div>`;

    protected abstract showPicker(): void;
    protected abstract pickerIcon: string;
    protected value: K;
    protected displayedPicker: boolean = false;
    protected isDestroyingPicker: boolean = false;

    @Autowired('gridOptionsWrapper') private gridOptionsWrapper: GridOptionsWrapper;

    @RefSelector('eLabel') protected eLabel: HTMLElement;
    @RefSelector('eWrapper') protected eWrapper: HTMLElement;
    @RefSelector('eDisplayField') protected eDisplayField: T;
    @RefSelector('eButton') private eButton: HTMLButtonElement;

    protected postConstruct() {
        super.postConstruct();

        const clickHandler = () => this.showPicker();
        this.addDestroyableEventListener(this.eButton, 'click', clickHandler);
        this.addDestroyableEventListener(this.eLabel, 'click', clickHandler);

        if (this.pickerIcon) {
            this.eButton.appendChild(_.createIconNoSpan(this.pickerIcon, this.gridOptionsWrapper, null));
        }
    }

    public setInputWidth(width: number | 'flex'): this {
        _.setElementWidth(this.eWrapper, width);
        return this;
    }
}