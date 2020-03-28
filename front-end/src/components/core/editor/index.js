import Header from '@/components/Layout/Header';
import RenderShortcutsPanel from '../components/shortcuts-panel/index';
import '../styles/index.scss';

export default {
  name: 'Editor',
  components: { Header, RenderShortcutsPanel },
  data() {
    return {
      activeName: '1'
    };
  },
  methods: {
    _renderLayout() {
      return (
        <div class='container'>
          <Header />
          <div class='content'>
            <div class='aside'>
              <el-tabs v-model={this.activeName}>
                <el-tab-pane label='组件列表' name='1'>
                  <div class='plugin-usage-tip'>
                    使用提示：<strong>点击</strong>组件即可
                  </div>
                  <RenderShortcutsPanel />
                </el-tab-pane>
                <el-tab-pane label='页面管理' name='2'>配置管理</el-tab-pane>
              </el-tabs>
            </div>
            <el-main>
            3
            </el-main>
          </div>
        </div>
      );
    }
  },
  render(h) {
    return this._renderLayout();
  }
};
