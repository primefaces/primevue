<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the Locale API imported from <i>primevue/config</i>.</p>

        <h3>Locale Options</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>startsWith</td>
                        <td>Starts with</td>
                    </tr>
                    <tr>
                        <td>contains</td>
                        <td>Contains</td>
                    </tr>
                    <tr>
                        <td>notContains</td>
                        <td>Not contains</td>
                    </tr>
                    <tr>
                        <td>endsWith</td>
                        <td>Ends with</td>
                    </tr>
                    <tr>
                        <td>equals</td>
                        <td>Equals</td>
                    </tr>
                    <tr>
                        <td>notEquals</td>
                        <td>Not equals</td>
                    </tr>
                    <tr>
                        <td>noFilter</td>
                        <td>No Filter</td>
                    </tr>
                    <tr>
                        <td>lt</td>
                        <td>Less than</td>
                    </tr>
                    <tr>
                        <td>lte</td>
                        <td>Less than or equal to</td>
                    </tr>
                    <tr>
                        <td>gt</td>
                        <td>Greater than</td>
                    </tr>
                    <tr>
                        <td>gte</td>
                        <td>Greater than or equal to</td>
                    </tr>
                    <tr>
                        <td>dateIs</td>
                        <td>Date is</td>
                    </tr>
                    <tr>
                        <td>dateIsNot</td>
                        <td>Date is not</td>
                    </tr>
                    <tr>
                        <td>dateBefore</td>
                        <td>Date is before</td>
                    </tr>
                    <tr>
                        <td>dateAfter</td>
                        <td>Date is after</td>
                    </tr>
                    <tr>
                        <td>clear</td>
                        <td>Clear</td>
                    </tr>
                    <tr>
                        <td>apply</td>
                        <td>Apply</td>
                    </tr>
                    <tr>
                        <td>matchAll</td>
                        <td>Match All</td>
                    </tr>
                    <tr>
                        <td>matchAny</td>
                        <td>Match Any</td>
                    </tr>
                    <tr>
                        <td>addRule</td>
                        <td>Add Rule</td>
                    </tr>
                    <tr>
                        <td>removeRule</td>
                        <td>Remove Rule</td>
                    </tr>
                    <tr>
                        <td>accept</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>reject</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>choose</td>
                        <td>Choose</td>
                    </tr>
                    <tr>
                        <td>upload</td>
                        <td>Upload</td>
                    </tr>
                    <tr>
                        <td>cancel</td>
                        <td>Cancel</td>
                    </tr>
                    <tr>
                        <td>completed</td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>pending</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>fileSizeTypes</td>
                        <td>['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']</td>
                    </tr>
                    <tr>
                        <td>dayNames</td>
                        <td>['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'</td>
                    </tr>
                    <tr>
                        <td>dayNamesShort</td>
                        <td>['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'</td>
                    </tr>
                    <tr>
                        <td>dayNamesMin</td>
                        <td>['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'</td>
                    </tr>
                    <tr>
                        <td>monthNames</td>
                        <td>['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'</td>
                    </tr>
                    <tr>
                        <td>monthNamesShort</td>
                        <td>['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'</td>
                    </tr>
                    <tr>
                        <td>chooseYear</td>
                        <td>Choose Year</td>
                    </tr>
                    <tr>
                        <td>chooseMonth</td>
                        <td>Choose Month</td>
                    </tr>
                    <tr>
                        <td>chooseDate</td>
                        <td>Choose Date</td>
                    </tr>
                    <tr>
                        <td>prevDecade</td>
                        <td>Previous Decade</td>
                    </tr>
                    <tr>
                        <td>nextDecade</td>
                        <td>Next Decade</td>
                    </tr>
                    <tr>
                        <td>prevYear</td>
                        <td>Previous Year</td>
                    </tr>
                    <tr>
                        <td>nextYear</td>
                        <td>Next Year</td>
                    </tr>
                    <tr>
                        <td>prevMonth</td>
                        <td>Previous Month</td>
                    </tr>
                    <tr>
                        <td>nextMonth</td>
                        <td>Next Month</td>
                    </tr>
                    <tr>
                        <td>prevHour</td>
                        <td>Previous Hour</td>
                    </tr>
                    <tr>
                        <td>nextHour</td>
                        <td>Next Hour</td>
                    </tr>
                    <tr>
                        <td>prevMinute</td>
                        <td>Previous Minute</td>
                    </tr>
                    <tr>
                        <td>nextMinute</td>
                        <td>Next Minute</td>
                    </tr>
                    <tr>
                        <td>prevSecond</td>
                        <td>Previous Second</td>
                    </tr>
                    <tr>
                        <td>nextSecond</td>
                        <td>Next Second</td>
                    </tr>
                    <tr>
                        <td>am</td>
                        <td>am</td>
                    </tr>
                    <tr>
                        <td>pm</td>
                        <td>pm</td>
                    </tr>
                    <tr>
                        <td>today</td>
                        <td>Today</td>
                    </tr>
                    <tr>
                        <td>weekHeader</td>
                        <td>Wk</td>
                    </tr>
                    <tr>
                        <td>firstDayOfWeek</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>showMonthAfterYear</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>dateFormat</td>
                        <td>mm/dd/yy</td>
                    </tr>
                    <tr>
                        <td>weak</td>
                        <td>Weak</td>
                    </tr>
                    <tr>
                        <td>medium</td>
                        <td>Medium</td>
                    </tr>
                    <tr>
                        <td>strong</td>
                        <td>Strong</td>
                    </tr>
                    <tr>
                        <td>passwordPrompt</td>
                        <td>Enter a password</td>
                    </tr>
                    <tr>
                        <td>searchMessage</td>
                        <td>{0} results are available</td>
                    </tr>
                    <tr>
                        <td>selectionMessage</td>
                        <td>{0} items selected</td>
                    </tr>
                    <tr>
                        <td>emptySelectionMessage</td>
                        <td>No selected item</td>
                    </tr>
                    <tr>
                        <td>emptySearchMessage</td>
                        <td>No results found</td>
                    </tr>
                    <tr>
                        <td>fileChosenMessage</td>
                        <td>{0} files</td>
                    </tr>
                    <tr>
                        <td>noFileChosenMessage</td>
                        <td>No file chosen</td>
                    </tr>
                    <tr>
                        <td>emptyMessage</td>
                        <td>No available options</td>
                    </tr>
                    <tr>
                        <td>aria.trueLabel</td>
                        <td>True</td>
                    </tr>
                    <tr>
                        <td>aria.falseLabel</td>
                        <td>False</td>
                    </tr>
                    <tr>
                        <td>aria.nullLabel</td>
                        <td>Not Selected</td>
                    </tr>
                    <tr>
                        <td>aria.star</td>
                        <td>1 star</td>
                    </tr>
                    <tr>
                        <td>aria.stars</td>
                        <td>{star} stars</td>
                    </tr>
                    <tr>
                        <td>aria.selectAll</td>
                        <td>All items selected</td>
                    </tr>
                    <tr>
                        <td>aria.unselectAll</td>
                        <td>All items unselected</td>
                    </tr>
                    <tr>
                        <td>aria.close</td>
                        <td>Close</td>
                    </tr>
                    <tr>
                        <td>aria.previous</td>
                        <td>Previous</td>
                    </tr>
                    <tr>
                        <td>aria.next</td>
                        <td>Next</td>
                    </tr>
                    <tr>
                        <td>aria.navigation</td>
                        <td>Navigation</td>
                    </tr>
                    <tr>
                        <td>aria.scrollTop</td>
                        <td>Scroll Top</td>
                    </tr>
                    <tr>
                        <td>aria.moveTop</td>
                        <td>Move Top</td>
                    </tr>
                    <tr>
                        <td>aria.moveUp</td>
                        <td>Move Up</td>
                    </tr>
                    <tr>
                        <td>aria.moveDown</td>
                        <td>Move Down</td>
                    </tr>
                    <tr>
                        <td>aria.moveBottom</td>
                        <td>Move Bottom</td>
                    </tr>
                    <tr>
                        <td>aria.moveToTarget</td>
                        <td>Move to Target</td>
                    </tr>
                    <tr>
                        <td>aria.moveToSource</td>
                        <td>Move to Source</td>
                    </tr>
                    <tr>
                        <td>aria.moveAllToTarget</td>
                        <td>Move All to Target</td>
                    </tr>
                    <tr>
                        <td>aria.moveAllToSource</td>
                        <td>Move All to Source</td>
                    </tr>
                    <tr>
                        <td>aria.pageLabel</td>
                        <td>Page {page}</td>
                    </tr>
                    <tr>
                        <td>aria.firstPageLabel</td>
                        <td>First Page</td>
                    </tr>
                    <tr>
                        <td>aria.lastPageLabel</td>
                        <td>Last Page</td>
                    </tr>
                    <tr>
                        <td>aria.nextPageLabel</td>
                        <td>Next Page</td>
                    </tr>
                    <tr>
                        <td>aria.prevPageLabel</td>
                        <td>Previous Page</td>
                    </tr>
                    <tr>
                        <td>aria.rowsPerPageLabel</td>
                        <td>Rows per page</td>
                    </tr>
                    <tr>
                        <td>aria.jumpToPageDropdownLabel</td>
                        <td>Jump to Page Dropdown</td>
                    </tr>
                    <tr>
                        <td>aria.jumpToPageInputLabel</td>
                        <td>Jump to Page Input</td>
                    </tr>
                    <tr>
                        <td>aria.selectRow</td>
                        <td>Row Selected</td>
                    </tr>
                    <tr>
                        <td>aria.unselectRow</td>
                        <td>Row Unselected</td>
                    </tr>
                    <tr>
                        <td>aria.expandRow</td>
                        <td>Row Expanded</td>
                    </tr>
                    <tr>
                        <td>aria.collapseRow</td>
                        <td>Row Collapsed</td>
                    </tr>
                    <tr>
                        <td>aria.showFilterMenu</td>
                        <td>Show Filter Menu</td>
                    </tr>
                    <tr>
                        <td>aria.hideFilterMenu</td>
                        <td>Hide Filter Menu</td>
                    </tr>
                    <tr>
                        <td>aria.filterOperator</td>
                        <td>Filter Operator</td>
                    </tr>
                    <tr>
                        <td>aria.filterConstraint</td>
                        <td>Filter Constraint</td>
                    </tr>
                    <tr>
                        <td>aria.editRow</td>
                        <td>Row Edit</td>
                    </tr>
                    <tr>
                        <td>aria.saveEdit</td>
                        <td>Save Edit</td>
                    </tr>
                    <tr>
                        <td>aria.cancelEdit</td>
                        <td>Cancel Edit</td>
                    </tr>
                    <tr>
                        <td>aria.listView</td>
                        <td>List View</td>
                    </tr>
                    <tr>
                        <td>aria.gridView</td>
                        <td>Grid View</td>
                    </tr>
                    <tr>
                        <td>aria.slide</td>
                        <td>Slide</td>
                    </tr>
                    <tr>
                        <td>aria.slideNumber</td>
                        <td>{slideNumber}</td>
                    </tr>
                    <tr>
                        <td>aria.zoomImage</td>
                        <td>Zoom Image</td>
                    </tr>
                    <tr>
                        <td>aria.zoomIn</td>
                        <td>Zoom In</td>
                    </tr>
                    <tr>
                        <td>aria.zoomOut</td>
                        <td>Zoom Out</td>
                    </tr>
                    <tr>
                        <td>aria.rotateRight</td>
                        <td>Rotate Right</td>
                    </tr>
                    <tr>
                        <td>aria.rotateLeft</td>
                        <td>Rotate Left</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DocSectionText>
</template>
