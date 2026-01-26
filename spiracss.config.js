// SpiraCSS Configuration for Next Starter (CSS Modules)
export default {
  aliasRoots: {
    src: ['src'],
    components: ['src/components'],
    styles: ['src/styles'],
    layouts: ['src/components/layouts'],
    common: ['src/components/common'],
    pages: ['src/components/pages'],
    parts: ['src/components/parts']
  },
  fileCase: {
    root: 'pascal',
    child: 'kebab'
  },
  stylelint: {
    base: {
      naming: {
        blockCase: 'camel',
        elementCase: 'camel',
        modifierCase: 'camel'
      },
      external: {
        prefixes: ['u-']
      }
    }
  },
  htmlFormat: {
    classAttribute: 'className'
  },
  jsxClassBindings: {
    memberAccessAllowlist: ['styles']
  },
  generator: {
    globalScssModule: 'styles/partials/global',
    pageEntryAlias: 'styles',
    pageEntrySubdir: 'pages',
    layoutMixins: ['@include breakpoint-up(md)']
  }
}
