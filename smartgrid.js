var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "3rem", /* gutter width px || % */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '3rem' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1100px', /* -> @media (max-width: 1100px) */
            'fields': '3rem' /* side fields */
        },
        md: {
            'width': '960px',
            'fields': '1.5rem'
        },
        sm: {
            'width': '780px',
            'fields': '1.5rem'
        },
        xs: {
            'width': '560px',
            'fields': '1.5rem'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};

smartgrid('./src/scss', settings);