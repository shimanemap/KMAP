<!doctype html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>松江市保育・幼稚園施設マップ</title>
        <link rel="stylesheet" href="css/ol.css" type="text/css">
        <link rel="stylesheet" href="css/bootstrap.css" type="text/css">
        <link rel="stylesheet" href="css/bootstrap.css.map" type="text/css">
        <link rel="stylesheet" href="css/jquery.mobile-1.4.4.css">
        <link rel="stylesheet" href="css/base.css" type="text/css">
        <link rel="stylesheet" href="css/icon-pack-custom.css">
    </head>
    <body>
        <div data-role="page" id="mainPage">
            <div role="main" class="ui-content">
            <div id="nav">
                <fieldset id="nav1" data-role="controlgroup" data-type="horizontal" data-mini="true">
                    <label for="cbNinka" id="lblNinka">認可</label>
                    <input type="checkbox" name="cbNinka" id="cbNinka" checked="checked">

                    <label for="cbNinkagai" id="lblNinkagai">認可外</label>
                    <input type="checkbox" name="cbNinkagai" id="cbNinkagai" checked="checked">

                    <label for="cbKindergarten" id="lblKindergarten">幼</label>
                    <input type="checkbox" name="cbKindergarten" id="cbKindergarten" checked="checked">

                    <label for="cbElementarySchool" id="lblElementarySchool">小</label>
                    <input type="checkbox" name="cbElementarySchool" id="cbElementarySchool">

                    <label for="cbMiddleSchool" id="lblMiddleSchool">中</label>
                    <input type="checkbox" name="cbMiddleSchool" id="cbMiddleSchool">

                    <a id="btnFilter" href="#filterdialog" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-btn-a ui-icon-filter ui-btn-icon-right ui-icon-check">検索</a>

                    <label for="changeBaseMap">背景</label>
                    <select id="changeBaseMap" data-mini="true">
                        <option>背景</option>
                    </select>
                    <!-- 
                    <label for="moveTo">最寄駅</label>
                    <select id="moveTo" data-mini="true">
                        <option>最寄駅</option>
                    </select>
                    -->
                    <label id="lblDisplayCircle" for="cbDisplayCircle" class="ui-btn-icon-notext">距離円<span class="ui-icon-bullseye ui-btn-icon-notext"></span></label>
                    <input type="checkbox" id="cbDisplayCircle" name="cbDisplayCircle" data-mini="true"/>

                    <label for="changeCircleRadius" class="ui-hidden-accessible">円表示</label>
                    <select id="changeCircleRadius" data-mini="true">
                        <optgroup label="円表示">
                            <option value="" selected="selected">円消去</option>
                            <option value="500">半径 500m</option>
                            <option value="1000">半径 1km</option>
                            <option value="3000">半径 3km</option>
                            <option value="5000">半径 5km</option>
                        </optgroup>
                    </select>

                    <a id="btnHelp" href="http://www.codeforsapporo.org/papamama/" target="_blank" class="ui-btn ui-icon-question ui-btn-icon-notext">help</a>
                    <!--
                    <a id="btnHelp" href="#helpDialog" data-rel="popup" data-position-to="window" class="ui-btn ui-icon-question ui-btn-icon-notext">help</a>
                    -->
                </fieldset>
            </div>
            <div id="map" class="map">
            </div>
            <div id="popup" data-role="popup" data-theme="a" class="ui-content ol-popup" style="max-height: 200px;">
                <a href="#" id="popup-closer" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
                <div id="popup-title" data-role="header" data-theme="a"></div>
                <div id="popup-content" role="main"></div>
            </div>
        </div>
        <div data-role="popup" data-history="false" id="filterdialog" data-theme="a" class="ui-corner-all ui-icon-delete ui-btn-left">
            <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
            <form>
                <div style="padding:10px 20px;">
                    <h3>保育施設 絞り込み</h3>
                    <legend>認可保育園</legend>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <label for="ninkaOpenTime" class="select">開園</label>
                        <select id="ninkaOpenTime" class="filtersb">
                            <option value="">開園</option>
                            <option value="700">7:00</option>
                            <option value="715">7:15</option>
                            <option value="720">7:20</option>
                            <option value="730">7:30</option>
                            <option value="1100">11:00</option>
                        </select>
                        <label for="ninkaCloseTime" class="select">終園</label>
                        <select id="ninkaCloseTime" class="filtersb">
                            <option value="">終園</option>
                            <option value="18">18:00以降</option>
                            <option value="19">19:00以降</option>
                            <option value="20">20:00以降</option>
                            <option value="22">22:00以降</option>
                            <option value="24">00:00</option>
                        </select>
                    </fieldset>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <label for="ninkaIchijiHoiku">一時保育</label>
                        <input type="checkbox" id="ninkaIchijiHoiku" class="filtercb">
                        <label for="ninkaYakan">夜間</label>
                        <input type="checkbox" id="ninkaYakan" class="filtercb">
                        <label for="ninkaKyujitu">休日</label>
                        <input type="checkbox" id="ninkaKyujitu" class="filtercb">
                    </fieldset>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <label for="ninkaVacancy">空きあり（試用版。最新の空き状況ではありません）</label>
                        <input type="checkbox" id="ninkaVacancy" class="filtercb">
                    </fieldset>
                    <legend>認可外保育園</legend>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <label for="ninkagaiOpenTime" class="select">開園</label>
                        <select id="ninkagaiOpenTime" class="filtersb">
                            <option value="">開園</option>
                            <!--<option value="7:00">7:00</option>
                            <option value="7:30">7:30以前</option>
                            <option value="7:45">7:45以前</option>
                            <option value="8:00">8:00以前</option>
                            -->
                            <option value="8:00">8:00</option>
                        </select>
                        <label for="ninkagaiCloseTime" class="select">終園</label>
                        <select id="ninkagaiCloseTime" class="filtersb">
                            <option value="">終園</option>
                            <option value="18">18:00以降</option>
                            <option value="19">19:00以降</option>
                            <option value="20">20:00以降</option>
                            <option value="22">22:00以降</option>
                            <option value="27">03:00</option>
                        </select>
                        <label for="ninkagai24H">24時間</label>
                        <input type="checkbox" id="ninkagai24H" class="filtercb">
                    </fieldset>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                    <label for="ninkagaiShomei">証明書あり</label>
                    <input type="checkbox" id="ninkagaiShomei" class="filtercb">
                    </fieldset>
                    <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                        <a href="#" data-rel="back" id="filterApply" class="ui-btn ui-corner-all ui-btn-a ui-btn-icon-left ui-icon-check">条件適用</a>
                        <a href="#" id="filterReset" class="ui-btn ui-corner-all ui-btn-a ui-btn-icon-left ui-icon-delete">リセット</a>
                    </fieldset>
                </div>
            </form>
        </div>
        <div data-role="popup" data-history="false" id="helpDialog" data-theme="a" class="ui-corner-all ui-icon-delete ui-btn-left">
            <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>
            <div style="padding:10px 20px;">
                <h3>さっぽろ保育園マップ</h3>
                <fieldset>
                    <p>
                    v1.0 (rev.20141130)
                    </p>
                    <a href="http://www.codeforsapporo.org/papamama/" target="_blank">詳しくはこちら</a>
                </fieldset>
                <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true">
                    <p>
                    (C) 2014 <a href="http://www.codeforsapporo.org/" target="_blank">Code for Sapporo.</a>
                    </p>
                    <a href="#" data-rel="back" id="helpClose" class="ui-btn ui-corner-all ui-btn-a ui-btn-icon-left ui-icon-check">閉じる</a>
                </fieldset>
            </div>
        </div>
        <script src="js/jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="js/jquery.mobile-1.4.4.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/v3.0.0/build/ol.js" type="text/javascript"></script>
        <script src="js/ol_style.js" type="text/javascript"></script>
        <script src="js/movecurrentlocationcontrol.js" type="text/javascript"></script>
        <script src="js/movetolist.js" type="text/javascript"></script>
        <script src="js/facilityfilter.js" type="text/javascript"></script>
        <script src="js/papamamap.js" type="text/javascript"></script>
        <script src="js/index.js" type="text/javascript"></script>
        <div id="marker"></div>
        <div id="markerTitle"></div>
        <div id="center_marker"></div>
        <div id="center_markerTitle"></div>
    </body>
</html>
