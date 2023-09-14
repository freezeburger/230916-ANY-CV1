'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">230916-any-cv1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-928bd9db5bf3a2bb7f8a50799778202791cb7e560182e4c76d4c5c7cc832ea13b9c61d281704d795baedda826df81c0385c5063242a57dcf4663c505d600f6c1"' : 'data-bs-target="#xs-components-links-module-AppModule-928bd9db5bf3a2bb7f8a50799778202791cb7e560182e4c76d4c5c7cc832ea13b9c61d281704d795baedda826df81c0385c5063242a57dcf4663c505d600f6c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-928bd9db5bf3a2bb7f8a50799778202791cb7e560182e4c76d4c5c7cc832ea13b9c61d281704d795baedda826df81c0385c5063242a57dcf4663c505d600f6c1"' :
                                            'id="xs-components-links-module-AppModule-928bd9db5bf3a2bb7f8a50799778202791cb7e560182e4c76d4c5c7cc832ea13b9c61d281704d795baedda826df81c0385c5063242a57dcf4663c505d600f6c1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-CoreModule-73ee0647345fca6ba92d18f86cfc15b2e618b5d97cbb9e3d249d2997eaf37699a39321af7e91c0eb2cd3428327399b92f14b207b8da700464481ed021fdf8b29"' : 'data-bs-target="#xs-directives-links-module-CoreModule-73ee0647345fca6ba92d18f86cfc15b2e618b5d97cbb9e3d249d2997eaf37699a39321af7e91c0eb2cd3428327399b92f14b207b8da700464481ed021fdf8b29"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CoreModule-73ee0647345fca6ba92d18f86cfc15b2e618b5d97cbb9e3d249d2997eaf37699a39321af7e91c0eb2cd3428327399b92f14b207b8da700464481ed021fdf8b29"' :
                                        'id="xs-directives-links-module-CoreModule-73ee0647345fca6ba92d18f86cfc15b2e618b5d97cbb9e3d249d2997eaf37699a39321af7e91c0eb2cd3428327399b92f14b207b8da700464481ed021fdf8b29"' }>
                                        <li class="link">
                                            <a href="directives/PresenterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PresenterDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DomainsModule.html" data-type="entity-link" >DomainsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-45015fbdb9d9a16825b0dad07190e1d9c308e45d1046d76944c5c5411b390e4db6b852897c9ee79717b41930466043e12aa9714523476fb84d7ccc972145024e"' : 'data-bs-target="#xs-components-links-module-ProductModule-45015fbdb9d9a16825b0dad07190e1d9c308e45d1046d76944c5c5411b390e4db6b852897c9ee79717b41930466043e12aa9714523476fb84d7ccc972145024e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-45015fbdb9d9a16825b0dad07190e1d9c308e45d1046d76944c5c5411b390e4db6b852897c9ee79717b41930466043e12aa9714523476fb84d7ccc972145024e"' :
                                            'id="xs-components-links-module-ProductModule-45015fbdb9d9a16825b0dad07190e1d9c308e45d1046d76944c5c5411b390e4db6b852897c9ee79717b41930466043e12aa9714523476fb84d7ccc972145024e"' }>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PresenterService.html" data-type="entity-link" >PresenterService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConfigurableComponent.html" data-type="entity-link" >ConfigurableComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacadeAction.html" data-type="entity-link" >FacadeAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FacadeService.html" data-type="entity-link" >FacadeService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PresenterComponent.html" data-type="entity-link" >PresenterComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});