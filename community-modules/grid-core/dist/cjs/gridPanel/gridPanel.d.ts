// Type definitions for @ag-grid-community/core v22.0.0-beta.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowContainerComponent } from "../rendering/rowContainerComponent";
import { Component } from "../widgets/component";
import { HeaderRootComp } from "../headerRendering/headerRootComp";
export declare type RowContainerComponentNames = 'fullWidth' | 'body' | 'pinnedLeft' | 'pinnedRight' | 'floatingTop' | 'floatingTopPinnedLeft' | 'floatingTopPinnedRight' | 'floatingTopFullWidth' | 'floatingBottom' | 'floatingBottomPinnedLeft' | 'floatingBottomPinnedRight' | 'floatingBottomFullWith';
export declare type RowContainerComponents = {
    [K in RowContainerComponentNames]: RowContainerComponent;
};
export declare class GridPanel extends Component {
    private alignedGridsService;
    private gridOptionsWrapper;
    private columnController;
    private rowRenderer;
    private pinnedRowModel;
    private eventService;
    private animationFrameService;
    private navigationService;
    private autoHeightCalculator;
    private columnAnimationService;
    private autoWidthCalculator;
    private paginationAutoPageSizeService;
    private beans;
    private paginationProxy;
    private columnApi;
    private gridApi;
    private dragService;
    private mouseEventService;
    private focusedCellController;
    private $scope;
    private scrollVisibleService;
    private valueService;
    private dragAndDropService;
    private heightScaler;
    private resizeObserverService;
    private rangeController;
    private contextMenuFactory;
    private clipboardService;
    private eBodyViewport;
    private eCenterContainer;
    private eCenterViewport;
    private eLeftContainer;
    private eRightContainer;
    private eCenterColsClipper;
    private eHorizontalScrollBody;
    private eHorizontalLeftSpacer;
    private eHorizontalRightSpacer;
    private eBodyHorizontalScrollViewport;
    private eBodyHorizontalScrollContainer;
    private eFullWidthContainer;
    private eTop;
    private eLeftTop;
    private eRightTop;
    private eTopContainer;
    private eTopViewport;
    private eTopFullWidthContainer;
    private eBottom;
    private eLeftBottom;
    private eRightBottom;
    private eBottomContainer;
    private eBottomViewport;
    private eBottomFullWidthContainer;
    headerRootComp: HeaderRootComp;
    private overlayWrapper;
    private rowContainerComponents;
    private eAllCellContainers;
    private scrollLeft;
    private scrollTop;
    private lastHorizontalScrollElement;
    private readonly resetLastHorizontalScrollElementDebounce;
    private bodyHeight;
    private enableRtl;
    private scrollWidth;
    private pinningRight;
    private pinningLeft;
    private printLayout;
    constructor();
    getVScrollPosition(): {
        top: number;
        bottom: number;
    };
    getHScrollPosition(): {
        left: number;
        right: number;
    };
    private onRowDataChanged;
    private showOrHideOverlay;
    private onNewColumnsLoaded;
    private init;
    private onDomLayoutChanged;
    private onCenterViewportResized;
    setColumnMovingCss(moving: boolean): void;
    setCellTextSelection(selectable?: boolean): void;
    private addRowDragListener;
    private addStopEditingWhenGridLosesFocus;
    private addAngularApplyCheck;
    private disableBrowserDragging;
    private addEventListeners;
    private addDragListeners;
    private addMouseListeners;
    private addKeyboardEvents;
    private addBodyViewportListener;
    getBodyClientRect(): ClientRect;
    private getRowForEvent;
    private processKeyboardEvent;
    private doClipboardOperations;
    scrollToTop(): void;
    private processMouseEvent;
    private mockContextMenuForIPad;
    private handleContextMenuMouseEvent;
    private onContextMenu;
    private preventDefaultOnContextMenu;
    private onCtrlAndA;
    private onCtrlAndC;
    private onCtrlAndV;
    private onCtrlAndD;
    ensureIndexVisible(index: any, position?: string): void;
    getCenterWidth(): number;
    isVerticalScrollShowing(): boolean;
    isHorizontalScrollShowing(): boolean;
    checkViewportAndScrolls(): void;
    private updateScrollVisibleService;
    private updateScrollVisibleServiceImpl;
    private setHorizontalScrollVisible;
    private setVerticalScrollPaddingVisible;
    updateRowCount(): void;
    ensureColumnVisible(key: any): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    sizeColumnsToFit(nextTimeout?: number): void;
    getCenterContainer(): HTMLElement;
    getDropTargetBodyContainers(): HTMLElement[];
    getDropTargetLeftContainers(): HTMLElement[];
    getDropTargetRightContainers(): HTMLElement[];
    private buildRowContainerComponents;
    private setupRowAnimationCssClass;
    private suppressScrollOnFloatingRow;
    getRowContainers(): RowContainerComponents;
    getFloatingTopBottom(): HTMLElement[];
    onDisplayedColumnsChanged(): void;
    private onDisplayedColumnsWidthChanged;
    private setWidthsOfContainers;
    private setCenterWidth;
    private setPinnedLeftWidth;
    private setPinnedRightWidth;
    private setPinnedContainerSize;
    private setFakeHScrollSpacerWidths;
    private checkBodyHeight;
    setHeaderAndFloatingHeights(): void;
    getBodyHeight(): number;
    setHorizontalScrollPosition(hScrollPosition: number): void;
    setVerticalScrollPosition(vScrollPosition: number): void;
    scrollHorizontally(pixels: number): number;
    scrollVertically(pixels: number): number;
    private addScrollListener;
    private onVerticalScroll;
    private isControllingScroll;
    private onFakeHorizontalScroll;
    private onCenterViewportScroll;
    private onBodyHorizontalScroll;
    private resetLastHorizontalScrollElement;
    private doHorizontalScroll;
    private redrawRowsAfterScroll;
    private onHorizontalViewportChanged;
    getCenterViewportScrollLeft(): number;
    private setCenterViewportScrollLeft;
    horizontallyScrollHeaderCenterAndFloatingCenter(scrollLeft?: number): void;
    addScrollEventListener(listener: () => void): void;
    removeScrollEventListener(listener: () => void): void;
}
