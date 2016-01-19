#january 2016

- author: @joahg
- link: [bmtjs.org/jan-2016](http://bmtjs.org/jan-2016)


#speaker notes

Improving Your Dev Env With Zsh

intro note: while Zsh can be used on any UNIX-based system (aka linux or mac), this talk is going to be centered around using it on a mac

what even is a terminal?
  - Terminal.app is one of the more powerful mac apps
  - emulator for bash
    - command processor that allows us to interact directly with the OS on a fundamental level.
  - used by devs, designers, and curious tinkerers
    - build tools like grunt or gulp to speed up frontend dev
    - tracking changes in version control
    - managing remote servers
    - etc
Intro to Terminal
  - Terminal.app can be found your `/Applications/Utilities/` folder.
  - basic bash shell
  - pretty bare-bones
  - not a lot of control
    - you can change colors, fonts, themes, etc, but the more you use it, the more you're going to want out of it
* what can be done? enter Zsh
Zsh is the answer
  - Z-shell is like bash's younger sibling
    - been around almost as long
    - incorporates most of bash's core features
    - comes packed with lots of extra features
  - don't bash bash
    - as a daily driver for mac, bash gets the job done.
    - it's probably not the best idea to replace bash with zsh on all of your remote linux servers
  - [oh my zsh](http://ohmyz.sh/) is amazing
    - extremely popular community-driven repo
    - basically a framework for managing your zsh profile
oh my zsh
  - installation is super simple
    - `sh -c "$(curl -fsSL 'https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh')"`
  - https://github.com/robbyrussell/oh-my-zsh
* now, the fun stuff
terminal. supercharged.
  - tab completion
    - cd ~/ **tab**
    - ip **tab**
  - hinted history
    - git **up**
  - shared history
    - tabs share history
  - integrated help syntax
    - rm -**tab**
  - themes, plugins, customizations
  - more info available on the GH repo: https://github.com/robbyrussell/oh-my-zsh

credit: http://cognition.happycog.com/article/gone-zshin