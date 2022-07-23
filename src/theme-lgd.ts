//import base from '@theme-ui/preset-base'
import { makeTheme } from '@theme-ui/css/utils'
import { color } from '.';
import spacer from './spacers';
import { text } from './thypograpy';
import { tokens as foundation } from './tokens/foundation';
import { tokens } from './tokens/logee-distribution';

export const lgd = makeTheme({
  //...base,
  colors: {
    ...color
  },
  spacers: {
    ...spacer
  },
  layout: {
    container: {
      fontFamily: 'Nunito Sans, sans-serif',
      '.container-login-center': {
        ['@media (max-width:480px)']: {
          '.container-side-right': {
            display: 'none'
          }
        },
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',

        '.form-side-center': {
          ['@media (max-width:480px)']: {
            height: '90vh',
            width: '90%',
          },
          position: 'absolute',
          backgroundColor: color.grayscale10,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          padding: '50px 50px 20px 50px',
          overflowY: 'scroll',
          height: '70vh',

          '.container-logo': {
            textAlign: 'center',
            '.wrapper-logo': {
              width: '150px'
            },
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3,
            textAlign: 'center',
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6,
            textAlign: 'center',
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6
          },

          '.wrapper-button': {
            width: '100%'
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px'
            }
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Nunito Sans, sans-serif',
          }
        },

        '.container-side-right': {
          width: '100%',

          '.wrapper-background': {
            width: '100% !important',
            height: '100vh !important',
            objectFit: 'cover',
          }
        }
      },

      '.container-login': {
        ['@media (max-width:768px)']: {
          '.container-side-right': {
            display: 'none'
          },
        },
        display: 'flex',
        overflow: 'hidden',
        height: '100vh',

        '.form-side-right': {
          ['@media (max-width:480px)']: {
            padding: '20px',
            width: '100%',
          },
          order: 1,
          width: '75%',
          padding: '50px 100px',
          overflowY: 'scroll',
          height: '100vh',
          position: 'relative',

          '.wrapper-logo': {
            width: '150px'
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6
          },

          '.wrapper-button': {
            width: '100%'
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px'
            }
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '70px',
            fontFamily: 'Nunito Sans, sans-serif',
          }
        },

        '.form-side-left': {
          ['@media (max-width:480px)']: {
            padding: '20px',
            width: '100%',
          },
          width: '75%',
          padding: '50px 100px',
          overflowY: 'scroll',
          height: '100vh',
          position: 'relative',

          '.wrapper-logo': {
            width: '150px'
          },

          '.wrapper-title': {
            color: color.secondary70,
            fontWeight: 700,
            fontSize: '36px',
            marginTop: spacer.spacing8,
            marginBottom: spacer.spacing3
          },

          '.wrapper-desc': {
            color: color.grayscale50,
            lineHeight: '24px',
            fontSize: '16px',
            marginBottom: spacer.spacing6
          },

          '.wrapper-title-email': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-title-pass': {
            color: color.grayscale80,
            marginTop: spacer.spacing6,
            fontWeight: 600,
            fontSize: '16px'
          },

          '.wrapper-remember': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: spacer.spacing6,
            marginBottom: spacer.spacing6
          },

          '.wrapper-button': {
            width: '100%'
          },

          '.wrapper-or': {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing4,
            '.wrapper-line': {
              width: '50%',
              borderBottom: `1px solid ${color.grayscale40}`
            },
            '.or': {
              marginLeft: '20px',
              marginRight: '20px'
            }
          },

          '.wrapper-register': {
            color: color.grayscale70,
            fontWeight: 600,
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacer.spacing4,
            marginBottom: spacer.spacing10,
          },

          '.wrapper-footer': {
            color: color.grayscale80,
            fontWeight: 600,
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '70px',
            fontFamily: 'Nunito Sans, sans-serif',
          }
        },

        '.container-side-right': {
          width: '100%',

          '.wrapper-background': {
            width: '100% !important',
            height: '100vh !important',
            objectFit: 'cover',
          }
        }
      }
    }
  },
  styles: {
    a: {
      '&:hover': {
        color: `${tokens.anchorHoverColor} !important`,
        textDecoration: "underline",
        outline: 'none',
        cursor: 'pointer'
      },
      '&:active': {
        color: `${tokens.anchorActiveColor} !important`,
        outline: 'none !important',
        textDecoration: 'underline !important',
      },
      '&:focus': {
        outline: `2px solid ${color.primary30} !important`,
        borderRadius: '4px !important',
        textDecoration: 'none !important',
      },
      '& .wrapper-anchor': {
        display: 'flex',
        alignItems: 'center'
      },
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginRight: '5px',
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
        marginLeft: '5px',
      },
      sm: {
        color: `${tokens.anchorDefaultColor} !important`,
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      },
      md: {
        color: tokens.anchorDefaultColor,
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      },
      lg: {
        color: tokens.anchorDefaultColor,
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
      }
    }
  },
  forms: {
    switch: {
      md: {
        height: '22px',
        width: '40px',
        marginTop: '-2px',
      },
      sm: {
        marginTop: '2px',
        height: '17px',
        width: '28px',
        'div': {
          height: '12px !important',
          width: '12px !important',
        }
      },
      background: '#C8CCD2 !important',
      'input:checked ~ &': {
        backgroundColor: '#52BD94 !important',
      },
      ":disabled": {
        background: '#D9DDE3 !important',
      }
    },
    checkbox: {
      sizeBoxLarge: {
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      sizeBoxSmall: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        fontFamily: 'Nunito Sans, sans-serif'
      },
      wrappLabel: {
        marginLeft: '10px'
      },
      '& .container-checkbox': {
        display: 'flex',
        alignItems: 'center',
      },
      check: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""',
            },
            cursor: 'pointer',
          },
          '&:checked': {
            '&:after': {
              content: '"\\2714"',
              color: color.grayscale60,
            }
          },
          backgroundColor: `${color.grayscale30} !important`,
          borderRadius: '4px !important',
          border: 'none !important',
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: `2px solid ${color.grayscale30}`,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: `2px solid ${color.primary50}`,
          '&:after': {
            color: color.primary20,
            content: '"\\2714"',
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2714"',
            color: color.grayscale10,
          },
          '&:hover': {
            backgroundColor: color.primary60,
          }
        }
      },
      indeterminate: {
        sm: {
          height: '20px !important',
          width: '20px !important'
        },
        '&:disabled': {
          '&:hover': {
            '&:after': {
              content: '""',
            },
            cursor: 'pointer',
          },
          '&:checked': {
            '&:after': {
              content: '"\\2012"',
              color: color.grayscale60,
            }
          },
          backgroundColor: `${color.grayscale30} !important`,
          borderRadius: '4px !important',
          border: 'none !important',
        },
        height: '24px',
        width: '24px',
        appearance: 'none',
        border: `2px solid ${color.grayscale30}`,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          border: `2px solid ${color.primary50}`,
          '&:after': {
            color: color.primary20,
            content: '"\\2012"',
          }
        },
        '&:checked': {
          backgroundColor: color.primary50,
          border: 'none',
          '&:after': {
            content: '"\\2012"',
            color: color.grayscale10,
          },
          '&:hover': {
            backgroundColor: color.primary60,
          }
        }
      }
    },
  },
  buttons: {
    sm: {
      padding: `${tokens.buttonsSmPaddingTopBottom} ${tokens.buttonsSmPaddingLeftRight} ${tokens.buttonsSmPaddingTopBottom} ${tokens.buttonsSmPaddingLeftRight} !important`,
      fontSize: `${text.caption.lg.reguler.fontSize} !important`,
      lineHeight: `${text.caption.lg.reguler.lineHeight} !important`,
      fontWeight: `${text.caption.lg.reguler.fontWeight} !important`,
    },
    md: {
      padding: `${tokens.buttonsMdPaddingTopBottom} ${tokens.buttonsMdPaddingLeftRight} ${tokens.buttonsMdPaddingTopBottom} ${tokens.buttonsMdPaddingLeftRight} !important`,
      fontSize: `${text.body.sm.reguler.fontSize} !important`,
      lineHeight: `${text.body.sm.reguler.lineHeight} !important`,
      fontWeight: `${text.body.sm.reguler.fontWeight} !important`,
    },
    lg: {
      padding: `${tokens.buttonsLgPaddingTopBottom} ${tokens.buttonsLgPaddingLeftRight} ${tokens.buttonsLgPaddingTopBottom} ${tokens.buttonsLgPaddingLeftRight} !important`,
      fontSize: `${text.body.sm.reguler.fontSize} !important`,
      lineHeight: `${text.body.sm.reguler.lineHeight} !important`,
      fontWeight: `${text.body.sm.reguler.fontWeight} !important`,
    },
    solid: {
      alignItems: 'center',
      borderRadius: `${tokens.buttonsBorderRadius}`,
      cursor: 'pointer',
      display: 'flex',
      lineHeight: '21px',
      fontWeight: '700',
      justifyContent: 'center',

      backgroundColor: tokens.buttonsPrimaryDefaultBackgroundColor,
      color: tokens.buttonsPrimaryDefaultColor,
      border: tokens.buttonsPrimaryBorderWidth,
      fontFamily: 'Nunito Sans, sans-serif',
      '& .wrapper-icon-left-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-left-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '& .wrapper-icon-both-children': {
        marginLeft: '10px',
        marginRight: '10px',
      },
      '& .wrapper-icon-left-children': {
        marginLeft: '10px'
      },
      '& .wrapper-icon-right-children': {
        marginRight: '10px'
      },
      '& .wrapper-two-icon': {
        marginRight: '10px'
      },
      '& .wrapperIconLeft': {
        marginRight: 10
      },
      '& .wrapperIconRight': {
        marginLeft: 10
      },
      '& .wrapper-icon-right-large': {
        display: 'flex',
        width: '20px',
        height: '20px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-medium': {
        display: 'flex',
        width: '16px',
        height: '16px',
        alignItems: 'center',
      },
      '& .wrapper-icon-right-small': {
        display: 'flex',
        width: '12px',
        height: '12px',
        alignItems: 'center',
      },
      '&:hover': {
        backgroundColor: tokens.buttonsPrimaryHoverBackgroundColor,
        color: tokens.buttonsPrimaryHoverColor,
        boxShadow: 'none !important',
      },
      '&:focus': {
        boxShadow: `0px 0px 0px 2px ${foundation.lgt500} !important`,
      },
      '&:active': {
        backgroundColor: tokens.buttonsPrimaryActiveBackgroundColor,
        color: tokens.buttonsPrimaryActiveColor,
        boxShadow: 'none !important',
      },
      '&:disabled': {
        cursor: 'unset !important',
        backgroundColor: tokens.buttonsPrimaryDisabledBackgroundColor,
        color: tokens.buttonsPrimaryDisabledColor,
      }
    }
  }
})

export default lgd
