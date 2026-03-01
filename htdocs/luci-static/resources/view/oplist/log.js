'use strict';
'require dom';
'require fs';
'require poll';
'require view';

return view.extend({
    render: function() {
        var css = '                     \
        #log_textarea {                 \
        padding: 10px;              \
        text-align: left;           \
    }                               \
    #log_textarea pre {             \
    padding: .5rem;             \
    word-break: break-all;      \
    margin: 0;                  \
    background: #1e1e1e;        \
    color: #d4d4d4;             \
    border-radius: 4px;         \
    overflow-y: auto;           \
    max-height: 600px;          \
    }                               \
    .description {                  \
    background-color: #33ccff;  \
    }';

    var log_textarea = E('div', { 'id': 'log_textarea' },
                         E('img', {
                             'src': L.resource('icons/loading.svg'),
                           'alt': _('Loading...'),
                           'style': 'vertical-align:middle'
                         }, _('Collecting data...'))
    );

    poll.add(L.bind(function() {
        return fs.read_direct('/etc/openlist/log/log.log', 'text')
        .then(function(res) {
            var log = E('pre', { 'wrap': 'pre' }, [
                res.trim() || _('Log is empty.')
            ]);

            dom.content(log_textarea, log);
            log.scrollTop = log.scrollHeight;
        }).catch(function(err) {
            var log;
            if (err.toString().includes('NotFoundError'))
                log = E('pre', { 'wrap': 'pre' }, [
                    _('Log file does not exist.')
                ]);
            else
                log = E('pre', { 'wrap': 'pre' }, [
                    _('Unknown error: %s').format(err)
                ]);

            dom.content(log_textarea, log);
        });
    }));

    return E('div', {}, [
        E('style', [ css ]),
             E('div', { 'class': 'cbi-section' }, [
                 log_textarea,
                 E('div', { 'style': 'text-align:right; margin-top:10px;' },
                   E('small', {}, _('Refresh every 5 seconds.').format(L.env.pollinterval))
                 )
             ])
    ]);
    },

    handleSaveApply: null,
    handleSave: null,
    handleReset: null
});
