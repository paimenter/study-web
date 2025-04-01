var count = isNaN
                count =
                    $(document).ready(function () {
                        if (count > 0) {
                            note = document.getElementById("note");
                            note.style.display = 'block';
                        }
                        else {
                            note = document.getElementById("note");
                            note.style.display = 'none';
                        }
                    });
                show = document.getElementById("show");
                show.addEventListener('click', function () {
                    $.get('../Notice.aspx', {}, function (data) {
                        $('.dv_notice').html(data)
                        note = document.getElementById("note");
                        note.style.display = 'none';
                        $('.hover_bkgr_fricc').show();
                    });
                });
                $(window).load(function () {

                    $('.popupCloseButton').click(function () {
                        $('.hover_bkgr_fricc').hide();
                    });
                });