import 'plugins/kibana/discover/saved_searches/saved_searches';
import 'plugins/kibana/discover/directives/no_results';
import 'plugins/kibana/discover/directives/timechart';
import 'ui/collapsible_sidebar';
import 'plugins/kibana/discover/components/field_chooser/field_chooser';
import 'plugins/kibana/discover/controllers/discover';
import 'plugins/kibana/discover/styles/main.less';
import 'ui/doc_table/components/table_row';
import 'ui/anyrobot_ui/dis_pagination';
import savedObjectRegistry from 'ui/saved_objects/saved_object_registry';

// preload

savedObjectRegistry.register(require('plugins/kibana/discover/saved_searches/saved_search_register'));
