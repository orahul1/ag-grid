import Vue from "vue";
import {AgGridVue} from "ag-grid-vue";
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default Vue.extend({
    template: `
        <div class="full-width-panel">
            <div class="full-width-details">
                <div class="full-width-detail"><b>Name: </b>{{params.data.name}}</div>
                <div class="full-width-detail"><b>Account: </b>{{params.data.account}}</div>
             </div>
             <ag-grid-vue style="height: 100%;"
                 class="full-width-grid ag-theme-alpine"
                 :gridOptions="gridOptions"
                 :columnDefs="colDefs"
                 :defaultColDef="defaultColDef"
                 :rowData="rowData"
                 @grid-ready="onGridReady">
            </ag-grid-vue>
        </div>
    `,
    components: {
        'ag-grid-vue': AgGridVue
    },
    data: function () {
        return {
            gridOptions: null,
            colDefs: null,
            rowData: null,
        };
    },
    beforeMount() {
        this.gridOptions = {debug: true};
        this.colDefs = [
            {field: 'callId'},
            {field: 'direction'},
            {field: 'number'},
            {field: 'duration', valueFormatter: "x.toLocaleString() + 's'"},
            {field: 'switchCode'}
        ];
        this.defaultColDef = {
            flex: 1,
            minWidth: 150
        };
    },
    mounted() {
        this.rowData = this.params.data.callRecords;
        this.rowIndex = this.params.rowIndex;
        this.masterGridApi = this.params.api;
    },
    beforeDestroy() {
      let detailGridId = "detail_" + this.rowIndex;

      // ag-Grid is automatically destroyed

      console.log("removing detail grid info with id: ", detailGridId);
      this.masterGridApi.removeDetailGridInfo(detailGridId);
    },
    methods: {
      onGridReady(params) {
        let detailGridId = "detail_" + this.rowIndex;

        let gridInfo = {
          id: detailGridId,
          api: params.api,
          columnApi: params.columnApi
        };

        console.log("adding detail grid info with id: ", detailGridId);
        this.masterGridApi.addDetailGridInfo(detailGridId, gridInfo);
      }
    }
});
