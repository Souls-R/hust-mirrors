import { translate } from "@docusaurus/Translate";

export type MirrorMeta = {
  id: string;
  type?: 'normal' | 'git';
  displayName?: string;
  description?: string;
  forceShown?: boolean;
  link?: string;
  helpID?: string;
};

export type DomainMeta = {
  domain: string;
  desc: string;
}

const mirrors: MirrorMeta[] = [
  { id: 'linux.git', type: 'git', description: 'Linux 内核主线仓库', helpID: 'linux.git' },
  { id: 'linux-stable.git', type: 'git', description: 'Linux 内核稳定分支仓库', helpID: 'linux.git' },
  { id: 'linux-next.git', type: 'git', description: 'Linux 内核源开发分支仓库', helpID: 'linux-next.git' },
  { id: 'qemu.git', type: 'git', description: '处理器模拟器 QEMU 代码仓库' },
  { id: 'archlinux', type: 'normal', description: 'Arch Linux 软件仓库', helpID: 'archlinux' },
  { id: 'debian', type: 'normal', description: 'Debian GNU/Linux 软件仓库', helpID: 'debian' },
  { id: 'deepin', type: 'normal', description: 'Deepin 软件仓库', helpID: 'deepin' },
  { id: 'openeuler', type: 'normal', description: 'OpenEuler 软件仓库', helpID: 'openeuler' },
  { id: 'openkylin', type: 'normal', description: 'OpenKylin 软件仓库', helpID: 'openkylin' },
  { id: 'ubuntu', type: 'normal', description: 'Ubuntu 软件仓库', helpID: 'ubuntu' },
]


const domains: DomainMeta[] = [
  {
    domain: 'hustmirror.cn', desc: translate({
      id: 'mirror.domain.1',
      message: '双栈线路'
    })
  },
  {
    domain: 'mirrors.hust.edu.cn', desc: translate({
      id: 'mirror.domain.2',
      message: 'IPV6线路'
    })
  },
]

export default {
  mirrors,
  domains
}
