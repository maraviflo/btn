

(function () {
    
    var Player, app, endCodeHTML, page, template,   templateCode;
    app = derby.createApp();
    app.registerViews();
    template = '<head><script src="https://derbyjs.github.io/derby-standalone/dist/0.6.0-alpha37/derby-standalone.min.js"><' + '/script>' + '</head>\n<body></body>\n<script type="text/template" id="body">\n  <view is="custom" data="{{_page.data}}"></view>\n</' + 'script>' + '<script type="text/template" id="custom">';
    endCodeHTML = '</' + 'script>';
    templateCode = '<script>\nvar app = derby.createApp();\napp.registerViews();\napp.component(\'custom\', Component);\npage = app.createPage();\ndocument.body.appendChild(page.getFragment(\'body\'))\napp.model.set("_page.data", [{}])\n<' + '/script>';
    Player = function () {
        function Player() {
        }
        Player.prototype.init = function (model) {
            return model.set('code', {
                html: '',
                js: ''
            });
        };
        Player.prototype.create = function (model) {
            var blob_url, runCode;
            this.inner.sSandbox = 'allow-scripts allow-same-origin';
            this.inner.domain = 'example.com';
            blob_url = '';
            runCode = function (_this) {
                return function () {
                    var blob, code, t;
                    code = model.get('code');
                    t = template + code.html + endCodeHTML + '<script>\nvar module = {};' + code.js + '</' + 'script>' + templateCode;
                    window.URL.revokeObjectURL(blob_url);
                    blob = new Blob([t], { type: 'text/html' });
                    blob_url = URL.createObjectURL(blob);
                    return _this.inner.src = blob_url;
                };
            }(this);
            model.on('change', 'code.**', runCode);
            return runCode();
        };
        return Player;
    }();
    app.component('player', Player);
    page = app.createPage();
    document.body.appendChild(page.getFragment('body'));
    app.model.set('_page.text', 'hi');
}.call(this));