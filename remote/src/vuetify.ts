import { createVuetify } from 'vuetify'
// import { VApp } from 'vuetify/components/VApp'
// import { VBtn } from 'vuetify/components/VBtn'
import { VDialog } from 'vuetify/components/VDialog'
import { VSnackbar } from 'vuetify/components/VSnackbar'
import { VPagination } from 'vuetify/components/VPagination'
// import { VField } from 'vuetify/components/VField';
// import { VList } from 'vuetify/components/VList'
// import { VMenu } from 'vuetify/components/VMenu'

import { VAutocomplete } from 'vuetify/components/VAutocomplete'
import { VTextField } from 'vuetify/components/VTextField'
import { VTextarea } from 'vuetify/components/VTextarea'
import { VRadioGroup } from 'vuetify/components/VRadioGroup'
import { VRadio } from 'vuetify/components/VRadio'
// import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { VSelect } from 'vuetify/components/VSelect'
import { VSlider } from 'vuetify/components/VSlider'
import { VCheckbox } from 'vuetify/components/VCheckbox'
// import { VIcon } from 'vuetify/components/VIcon'

import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

const aliases = {
  /* Only used icon aliases here */
  expand: allAliases.expand,
  checkboxOn: allAliases.checkboxOn,
  checkboxOff: allAliases.checkboxOff,
  radioOn: allAliases.radioOn,
  radioOff: allAliases.radioOff,
  prev: allAliases.prev,
  next: allAliases.next
}

export const vuetify = createVuetify({
    theme: false,
    ssr: false,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    components: {
      // VApp,
      // VBtn,
      // VIcon,
      VAutocomplete,
      VCheckbox,
      VDialog,
      // VField,
      // VList,
      // VMenu,
      VRadioGroup,
      VRadio,
      VSnackbar,
      VPagination,
      VTextarea,
      VTextField,
      VSelect,
      VSlider
      // VDatePicker,
    }
    // directives,
})

