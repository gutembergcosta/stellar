<div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <div class="d-sm-flex align-items-center mb-4">
                <h4 class="card-title mb-sm-0">Products Inventory</h4>
                <a href="#" class="text-dark ml-auto mb-3 mb-sm-0"> View all Products</a>
            </div>
            <div id="calendar"></div>
                <script>

                $(document).ready(function() {
                    $('#calendar').fullCalendar({
                        header: {
                            left: 'title',
                            center: '',
                            right: 'prev,next'
                        },
                        defaultDate: '2023-04-12',
                        locale: 'pt-br',
                        weekNumbers:false,
                        buttonIcons: false, // show the prev/next text
                        navLinks: false, // can click day/week names to navigate views
                        editable: false,
                        eventLimit: true, // allow "more" link when too many events
                        events: [
                            {
                                title: 'All Day Event',
                                start: '2023-04-01'
                            },
                            {
                                title: 'All Day Easdfvent',
                                start: '2023-04-01'
                            },
                            {
                                title: 'Long Event',
                                start: '2023-04-07',
                                end: '2023-04-10'
                            },
                            {
                                id: 999,
                                title: 'Repeating Event',
                                start: '2023-04-09T16:00:00'
                            },
                            {
                                id: 999,
                                title: 'Repeating Event',
                                start: '2023-04-16T16:00:00'
                            },
                            {
                                title: 'Conference',
                                start: '2023-04-11',
                                end: '2023-04-13'
                            },
                            {
                                title: 'Meeting',
                                start: '2023-04-12T10:30:00',
                                end: '2023-04-12T12:30:00'
                            },
                            {
                                title: 'Lunch',
                                start: '2023-04-12T12:00:00'
                            },
                            {
                                title: 'Meeting',
                                start: '2023-04-12T14:30:00'
                            },
                            {
                                title: 'Happy Hour',
                                start: '2023-04-12T17:30:00'
                            },
                            {
                                title: 'Dinner',
                                start: '2023-04-12T20:00:00'
                            },
                            {
                                title: 'Birthday Party',
                                start: '2023-04-13T07:00:00'
                            },
                            {
                                title: 'Click for Google',
                                url: 'http://google.com/',
                                start: '2023-04-28'
                            }
                        ]
                        });
                    
                        
                    });
                    
                </script>
        

        </div>
        </div>
    </div>
</div>