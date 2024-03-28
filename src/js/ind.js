(function () {
  function t_ready(e) {
    'loading' != document.readyState
      ? e()
      : document.addEventListener
      ? document.addEventListener('DOMContentLoaded', e)
      : document.attachEvent('onreadystatechange', () => {
          'loading' != document.readyState && e();
        });
  }
  t_ready(() => {
    const int = setInterval(() => {
      const t776Blocks = document.querySelectorAll('.t776');
      const t778Blocks = document.querySelectorAll('.t778');
      const t786Blocks = document.querySelectorAll('.t786');
      const t951Blocks = document.querySelectorAll('.t951');
      const allBlocksCounter = [
        ...t776Blocks,
        ...t778Blocks,
        ...t786Blocks,
        ...t951Blocks,
      ].length;
      let BlocksWithProductsCounter = 0;
      const allJsProducts = document.querySelectorAll(
        '.js-product.t-store__card'
      );
      console.log('allJsProducts', allJsProducts);
      function checkProductInBlock(blockArr) {
        blockArr.forEach((block) => {
          const product = block.querySelector('.js-product.t-store__card');
          if (product) {
            BlocksWithProductsCounter++;
          }
        });
      }
      if (t776Blocks.length > 0) {
        checkProductInBlock(t776Blocks);
      }
      if (t778Blocks.length > 0) {
        checkProductInBlock(t778Blocks);
      }
      if (t786Blocks.length > 0) {
        checkProductInBlock(t786Blocks);
      }
      if (t951Blocks.length > 0) {
        checkProductInBlock(t951Blocks);
      }
      console.log('t778Blocks', t778Blocks);
      if (allBlocksCounter === BlocksWithProductsCounter) {
        clearInterval(int);
        const int1 = setInterval(() => {
          if (window.t_store_product_disableUnavailOpts != undefined) {
            clearInterval(int1);
            window.t_store_product_disableUnavailOpts = function (
              el_product,
              product
            ) {
              const optsValsBeforeChangedArr = [];
              if (product.editionOptions.length > 0) {
                optsValsBeforeChangedArr.push(product.editionOptions[0]);
              }
              for (let i = 1; i < product.editionOptions.length; i++) {
                const curOpt = product.editionOptions[i];
                var el_curOpt = t_store_product_getEditionSelectEl(
                  el_product,
                  curOpt
                );
                if (!el_curOpt) {
                  return;
                }
                optsValsBeforeChangedArr.push(curOpt);
                Array.prototype.forEach.call(curOpt.values, (curOptVal) => {
                  const hasEdition =
                    t_store_product_getFirstAvailableEditionData_forCertainVals(
                      product.editions,
                      optsValsBeforeChangedArr,
                      el_product,
                      curOptVal
                    );
                  const value = (curOptVal || '')
                    .replace(/\\/g, '\\\\')
                    .replace(/&amp;/g, '&')
                    .replace(/"/g, '\\"');
                  const el_optionTag = el_curOpt.querySelector(
                    'option[value="' + value + '"]'
                  );
                  const el_custom_input = el_curOpt.querySelector(
                    '.t-product__option-input[value="' + value + '"]'
                  );
                  el_curOpt
                    .querySelectorAll('.t-product__option-input')
                    .forEach((item) => {
                      item.removeAttribute('disabled');
                    });
                  if (hasEdition) {
                    if (el_optionTag) {
                      el_optionTag.removeAttribute('disabled');
                    }
                    if (el_custom_input) {
                      var el_parent = el_custom_input.closest(
                        '.t-product__option-item'
                      );
                      el_parent.classList.remove(
                        't-product__option-item_disabled-nlm038'
                      );
                      el_parent.classList.remove(
                        't-product__option-item_disabled'
                      );
                    }
                  } else {
                    if (el_optionTag) {
                      if (el_optionTag.selected) {
                        const optionParent = el_optionTag.closest(
                          '.js-product-edition-option-variants'
                        );
                      }
                    }
                    if (el_custom_input) {
                      var el_parent = el_custom_input.closest(
                        '.t-product__option-item'
                      );
                      el_parent.classList.add(
                        't-product__option-item_disabled-nlm038'
                      );
                    }
                  }
                });
              }
            };
          }
        }, 10);
        const int2 = setInterval(() => {
          if (window.t_store_product_disableUnavaileOptions != undefined) {
            clearInterval(int2);
            window.t_store_product_disableUnavaileOptions = function (
              el_product,
              product
            ) {
              if (product.editionOptions.length === 0) return;
              const productUid = el_product.getAttribute(
                'data-product-gen-uid'
              );
              if (
                !window.tStoreDisabledOptionsList ||
                (window.tStoreDisabledOptionsList &&
                  !window.tStoreDisabledOptionsList[productUid])
              ) {
                t_store_product_generateOptionsListForDisable(
                  el_product,
                  product
                );
              }
              const optionList = window.tStoreDisabledOptionsList[productUid];
              if (!optionList || optionList.length === 0) return;
              Array.prototype.forEach.call(optionList, (disableOption) => {
                Object.keys(disableOption).forEach((name) => {
                  const selectEl = el_product.querySelector(
                    '.js-product-edition-option[data-edition-option-id="' +
                      (name || '').replace(/"/g, '\\"') +
                      '"]'
                  );
                  if (!selectEl) return;
                  const optionVariants = selectEl.querySelector(
                    '.js-product-edition-option-variants'
                  );
                  if (optionVariants) {
                    var value = (disableOption[name] || '').replace(
                      /"/g,
                      '\\"'
                    );
                    const optionForDisable = optionVariants.querySelector(
                      'option[value="' + value + '"]'
                    );
                  }
                  const customOptionForDisable = selectEl.querySelector(
                    '.t-product__option-input[value="' + value + '"]'
                  );
                  if (customOptionForDisable) {
                    const el_parent = customOptionForDisable.closest(
                      '.t-product__option-item'
                    );
                    el_parent.classList.add(
                      't-product__option-item_disabled-nlm038'
                    );
                  }
                });
              });
            };
          }
        }, 10);
        const address = window.location.href;
        let popup = document.querySelector('.t-body_popupshowed');
        const newBtnText =
          '<div class="wbtn t-store__card__btn" style="display:inline-block;"><a href="#popup:nal" class="tn-atom t-btn t-btn_sm transDurOff" style="" ><table style="width:100%; height:100%;"><tbody><tr><td class="js-store-prod-popup-buy-btn-txt">Товар под заказ от одного дня</td></tr></tbody></table></a> </div>';
        let originalBtn;
        let style;
        const notShowInCatalog = false;
        let isCatalogCardResize = false;
        let isCatalogResize = false;
        let isRelevantsResize = false;
        if (!popup && window.location.pathname.includes('tproduct')) {
          const int = setInterval(() => {
            if (!popup && window.location.pathname.includes('tproduct')) {
              changeBtnProductPage();
              eventForSelects('productAsPage');
              eventForCheckmarks('productAsPage');
              changeBtnCatalog();
              changeBtnProductBlock();
              eventForSelects('productBlock');
              eventForCheckmarks('productBlock');
              eventForSelects('catalog');
              eventForCheckmarks('catalog');
            }
          }, 100);
          setTimeout(() => {
            clearInterval(int);
          }, 2000);
        }
        if (!window.location.pathname.includes('tproduct')) {
          const int = setInterval(() => {
            if (!window.location.pathname.includes('tproduct')) {
              changeBtnCatalog();
              changeBtnProductBlock();
              eventForSelects('productBlock');
              eventForCheckmarks('productBlock');
              eventForSelects('catalog');
              eventForCheckmarks('catalog');
            }
          }, 100);
          setTimeout(() => {
            clearInterval(int);
          }, 2000);
        }
        const arrLinks = [];
        document
          .querySelectorAll(
            '[data-record-type="756"], [data-record-type="766"], [data-record-type="750"]'
          )
          .forEach((item) => {
            const hook = item
              .querySelector('.t-popup')
              .getAttribute('data-tooltip-hook');
            arrLinks.push(hook);
          });
        const id = document.querySelector('body');
        id.addEventListener(
          'click',
          function (e) {
            for (
              let target = e.target;
              target && target != this;
              target = target.parentNode
            ) {
              if (
                target.matches('[href*="tproduct"]') ||
                arrLinks.includes(target.getAttribute('href'))
              ) {
                const int = setInterval(() => {
                  changeBtnProductPopup();
                  eventForSelects('productPopup');
                  eventForCheckmarks('productPopup');
                }, 100);
                setTimeout(() => {
                  clearInterval(int);
                }, 2000);
                break;
              } else if (target.classList.contains('js-store-load-more-btn')) {
                const int = setInterval(() => {
                  changeBtnCatalog();
                  eventForSelects('catalog');
                  eventForCheckmarks('catalog');
                }, 100);
                setTimeout(() => {
                  clearInterval(int);
                }, 2000);
                break;
              }
            }
          },
          false
        );
        const b = setInterval(() => {
          if (window.t_store_onFuncLoad !== undefined) {
            clearInterval(b);
            const f1 = window.t_store_onFuncLoad;
            window.t_store_onFuncLoad = function (t, e, r) {
              f1(t, e, r);
              const int = setInterval(() => {
                if (popup) {
                  changeBtnProductPopup();
                  eventForSelects('productPopup');
                  eventForCheckmarks('productPopup');
                } else if (
                  document.querySelector('.t-store__prod-snippet__container') &&
                  window.location.pathname.includes('tproduct')
                ) {
                  changeBtnProductPage();
                  eventForSelects('productAsPage');
                  eventForCheckmarks('productAsPage');
                  changeBtnCatalog();
                  changeBtnProductBlock();
                  eventForSelects('productBlock');
                  eventForCheckmarks('productBlock');
                  eventForSelects('catalog');
                  eventForCheckmarks('catalog');
                } else if (!window.location.pathname.includes('tproduct')) {
                  changeBtnCatalog();
                  changeBtnProductBlock();
                  eventForSelects('productBlock');
                  eventForCheckmarks('productBlock');
                  eventForSelects('catalog');
                  eventForCheckmarks('catalog');
                }
              }, 100);
              setTimeout(() => {
                clearInterval(int);
              }, 2000);
            };
          }
        });
        const c = setInterval(() => {
          const elem = document.querySelector(
            '.t-popup:not(.t-popup_show)[data-tooltip-hook="#popup:nal"] .t-form__inputsbox'
          );
          if (elem) {
            const classes = Array.from(elem.classList);
            classes.forEach((cls) => {
              if (cls.includes('hidden')) {
                elem.classList.remove(cls);
                elem
                  .closest('form')
                  .querySelector('.js-successbox').style.display = 'none';
              }
            });
          }
        }, 500);
        function eventForSelects(state) {
          if (state == 'productAsPage') {
            var selectBlocksList = document.querySelectorAll(
              '.t-store__product-snippet .t-product__option-select'
            );
          } else if (state == 'productPopup') {
            var selectBlocksList = document.querySelectorAll(
              '.t-popup_show .t-product__option-select'
            );
          } else if (state == 'productBlock') {
            var selectBlocksList = document.querySelectorAll(
              '.t744 .t-product__option-select, .t762 .t-product__option-select, .t760 .t-product__option-select, .t922 .t-product__option-select, .t780 .t-product__option-select'
            );
          } else if (state == 'catalog') {
            var selectBlocksList = document.querySelectorAll(
              '.t754 .t-product__option-select, .t776 .t-product__option-select, .t778 .t-product__option-select, .t786 .t-product__option-select, .t951 .t-product__option-select'
            );
          }
          if (selectBlocksList.length >= 1) {
            selectBlocksList.forEach((item) => {
              if (item.getAttribute('btn-change-event') != 'yes') {
                item.addEventListener('change', (e) => {
                  if (state == 'productAsPage') {
                    if (
                      e.target.closest('.t-store__relevants__container') ||
                      e.target.closest('#t-footer')
                    ) {
                      setTimeout(() => {
                        changeBtnCatalogCard(e.target.closest('.js-product'));
                      });
                    } else {
                      setTimeout(() => {
                        changeBtnProductPage();
                      });
                    }
                  } else if (state == 'productPopup') {
                    if (e.target.closest('.t-store__relevants__container')) {
                      setTimeout(() => {
                        changeBtnCatalogCard(e.target.closest('.js-product'));
                      });
                    } else {
                      setTimeout(() => {
                        changeBtnProductPopup();
                      });
                    }
                  } else if (state == 'productBlock') {
                    setTimeout(() => {
                      changeBtnProductBlock();
                    });
                  } else if (state == 'catalog') {
                    setTimeout(() => {
                      changeBtnCatalogCard(e.target.closest('.js-product'));
                    });
                  }
                });
                item.setAttribute('btn-change-event', 'yes');
              }
            });
          }
        }
        function eventForCheckmarks(state) {
          if (state == 'productAsPage') {
            var checkmarksList = document.querySelectorAll(
              '.t-store__product-snippet .t-product__option-item'
            );
          } else if (state == 'productPopup') {
            var checkmarksList = document.querySelectorAll(
              '.t-popup_show .t-product__option-item'
            );
          } else if (state == 'productBlock') {
            var checkmarksList = document.querySelectorAll(
              '.t744 .t-product__option-item, .t762 .t-product__option-item, .t760 .t-product__option-item, .t922 .t-product__option-item, .t780 .t-product__option-item'
            );
          } else if (state == 'catalog') {
            var checkmarksList = document.querySelectorAll(
              '.t754 .t-product__option-item, .t776 .t-product__option-item, .t778 .t-product__option-item, .t786 .t-product__option-item, .t951 .t-product__option-item'
            );
          }
          if (checkmarksList.length >= 1) {
            checkmarksList.forEach((item) => {
              if (item.getAttribute('btn-change-event') != 'yes') {
                item.addEventListener('click', (e) => {
                  if (state == 'productAsPage') {
                    if (
                      e.target.closest('.t-store__relevants__container') ||
                      e.target.closest('#t-footer')
                    ) {
                      setTimeout(() => {
                        changeBtnCatalogCard(e.target.closest('.js-product'));
                      });
                    } else {
                      setTimeout(() => {
                        changeBtnProductPage();
                      });
                    }
                  } else if (state == 'productPopup') {
                    if (e.target.closest('.t-store__relevants__container')) {
                      setTimeout(() => {
                        changeBtnCatalogCard(e.target.closest('.js-product'));
                      });
                    } else {
                      setTimeout(() => {
                        changeBtnProductPopup();
                      });
                    }
                  } else if (state == 'productBlock') {
                    setTimeout(() => {
                      changeBtnProductBlock();
                    });
                  } else if (state == 'catalog') {
                    setTimeout(() => {
                      changeBtnCatalogCard(item.closest('.js-product'));
                    });
                  }
                });
                item.setAttribute('btn-change-event', 'yes');
              }
            });
          }
        }
        function addBtn(list, state) {
          list.forEach((item) => {
            const btnParent = item.closest('.js-product');
            if (!btnParent.querySelector('.wbtn')) {
              style = window.getComputedStyle(item);
              item.style.display = 'none';
              item.insertAdjacentHTML('beforebegin', newBtnText);
              const newBtnElem =
                item.parentNode.querySelector('.wbtn').firstChild;
              if (state == 'catalog' || state == 'relevants') {
                newBtnElem.classList.add('t-store__card__btn');
              }
              if (state == 'popup' || state == 'page') {
                newBtnElem.classList.add('t-store__prod-popup__btn');
              }
              newBtnElem.style.color = style.color;
              newBtnElem.style.backgroundColor = style.backgroundColor;
              newBtnElem.style.borderRadius = style.borderRadius;
              newBtnElem.style.border = style.border;
              newBtnElem.style.borderColor = style.borderColor;
              newBtnElem.style.borderStyle = style.borderStyle;
              newBtnElem.style.borderWidth = style.borderWidth;
              newBtnElem.style.borderBottomLeftRadius =
                style.borderBottomLeftRadius;
              newBtnElem.style.borderBottomRightRadius =
                style.borderBottomRightRadius;
              newBtnElem.style.borderTopLeftRadius = style.borderTopLeftRadius;
              newBtnElem.style.borderTopRightRadius =
                style.borderTopRightRadius;
              newBtnElem.style.fontSize = style.fontSize;
              newBtnElem.style.fontWeight = style.fontWeight;
              newBtnElem.style.fontFamily = style.fontFamily;
              newBtnElem.style.height = style.height;
              newBtnElem.style.lineHeight = style.lineHeight;
              newBtnElem.style.textDecoration = style.textDecoration;
              newBtnElem.style.textShadow = style.textShadow;
              newBtnElem.style.letterSpacing = style.letterSpacing;
              newBtnElem.style.textTransform = style.textTransform;
              newBtnElem.style.transition = '0s';
              newBtnElem.style.webkitTransition = '0s';
              function newBtnEvent() {
                newBtnElem.style.transition = style.transition;
                newBtnElem.style.webkitTransition = style.webkitTransition;
                newBtnElem.removeEventListener('mouseover', newBtnEvent);
              }
              newBtnElem.addEventListener('mouseover', newBtnEvent);
              newBtnElem.style.padding = style.padding;
              newBtnElem.style.margin = style.margin;
              newBtnElem.style.boxShadow = style.boxShadow;
              if (
                (state == 'catalog' || state == 'catalogCard') &&
                notShowInCatalog &&
                !item.closest('.t-popup')
              ) {
                newBtnElem.style.display = 'none';
              } else {
                newBtnElem.style.display = 'inline-flex';
              }
              newBtnElem.style.opacity = 1;
              newBtnElem.style.pointerEvents = 'auto';
              newBtnElem.classList.remove('transDurOff');
            }
          });
        }
        function delBtn(state, card) {
          if (state == 'catalog') {
            var newBtnsList = document.querySelectorAll(
              '.t754 .wbtn, .t776 .wbtn, .t778 .wbtn, .t786 .wbtn, .t951 .wbtn'
            );
          } else if (state == 'block') {
            var newBtnsList = document.querySelectorAll(
              '.t744 .wbtn, .t762 .wbtn, .t760 .wbtn, .t922 .wbtn, .t780 .wbtn'
            );
          } else if (state == 'popup') {
            var newBtnsList = document.querySelectorAll(
              '.t-popup_show .t-store__product-popup .wbtn, .t-popup_show .t756__container .wbtn, .t-popup_show .t766__container .wbtn, .t-popup_show .t750__container .wbtn'
            );
          } else if (state == 'page') {
            var newBtnsList = document.querySelectorAll(
              '.t-store__product-snippet .wbtn'
            );
          } else if (state == 'catalogCard') {
            var newBtnsList = card.querySelectorAll('.wbtn');
          } else if (state == 'relevants') {
            var newBtnsList = document.querySelectorAll(
              '.t-store__relevants__container .wbtn'
            );
          }
          if (newBtnsList.length >= 1) {
            newBtnsList.forEach((item) => {
              item.remove();
            });
          }
        }
        function deleteBtn(state, card) {
          const currentState = state;
          delBtn(currentState, card);
          if (currentState == 'catalog') {
            var originalBtnsList = document.querySelectorAll(
              '.t754 a[href="#order"], .t776 a[href="#order"], .t778 a[href="#order"], .t786 a[href="#order"], .t951 a[href="#order"]'
            );
          } else if (currentState == 'block') {
            var originalBtnsList = document.querySelectorAll(
              '.t744 a[href="#order"], .t762 a[href="#order"], .t760 a[href="#order"], .t922 a[href="#order"], .t780 a[href="#order"]'
            );
          } else if (currentState == 'popup') {
            var originalBtnsList = document.querySelectorAll(
              '.t-popup_show .t-store__product-popup a[href="#order"], .t-popup_show .t756__btn, .t-popup_show .t766__btn, .t-popup_show .t750__btn'
            );
          } else if (currentState == 'page') {
            var originalBtnsList = document.querySelectorAll(
              '.t-store__product-snippet a[href="#order"]'
            );
          } else if (currentState == 'catalogCard') {
            var originalBtnsList = card.querySelectorAll('a[href="#order"]');
          } else if (currentState == 'relevants') {
            var originalBtnsList = document.querySelectorAll(
              '.t-store__relevants__container a[href="#order"]'
            );
          }
          if (originalBtnsList.length >= 1) {
            originalBtnsList.forEach((item) => {
              if (
                currentState == 'catalog' ||
                currentState == 'catalogCard' ||
                currentState == 'relevants'
              ) {
                if (item.closest('.t-store__card__btns-wrapper')) {
                  item.style.display = 'inline-flex';
                }
              } else {
                item.style.display = 'inline-block';
              }
              if (item.classList.contains('nlm038-disabled')) {
                item.classList.remove('t-store__prod-popup__btn_disabled');
                item.classList.remove('nlm038-disabled');
              }
            });
          }
        }
        function unlockSelects() {
          document
            .querySelectorAll(
              '.js-product-edition-option-variants option[disabled="disabled"]'
            )
            .forEach((item) => {
              item.removeAttribute('disabled');
            });
          document
            .querySelectorAll(
              'form.t-product__option-variants .t-product__option-item'
            )
            .forEach((item) => {
              if (item.classList.contains('t-product__option-item_disabled')) {
                item.classList.remove('t-product__option-item_disabled');
              }
            });
        }
        function quantityHideShow() {
          document.querySelectorAll('.nlm038-quantity-hide').forEach((item) => {
            item.classList.remove('nlm038-quantity-hide');
          });
          document.querySelectorAll('.wbtn').forEach((item) => {
            const parent = item.parentNode;
            if (parent.querySelector('.t-store__prod__quantity')) {
              parent
                .querySelector('.t-store__prod__quantity')
                .classList.add('nlm038-quantity-hide');
            }
          });
        }
        function t_throttle(t, e, n) {
          let o;
          let i;
          return (
            e || (e = 250),
            function () {
              const a = n || this;
              const r = +new Date();
              const l = arguments;
              o && r < o + e
                ? (clearTimeout(i),
                  (i = setTimeout(() => {
                    (o = r), t.apply(a, l);
                  }, e)))
                : ((o = r), t.apply(a, l));
            }
          );
        }
        function changeBtnCatalogCard(card) {
          unlockSelects();
          const disabledBtnsList = card.querySelectorAll(
            '.t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity)'
          );
          if (disabledBtnsList.length >= 1) {
            addBtn(disabledBtnsList, 'catalog');
            if (!isCatalogCardResize) {
              window.addEventListener(
                'resize',
                t_throttle(() => {
                  console.log('resizeCard');
                  deleteBtn('catalog');
                  addBtn(disabledBtnsList, 'catalog');
                })
              );
              isCatalogCardResize = true;
            }
          } else {
            deleteBtn('catalogCard', card);
          }
          quantityHideShow();
          const btnLinksList = card.querySelectorAll('a[href="#popup:nal"]');
          if (btnLinksList.length >= 1) {
            btnLinksList.forEach((item) => {
              if (item.getAttribute('set-name-event') != 'yes') {
                item.addEventListener('click', () => {
                  const productNameLink = document.querySelector(
                    '[data-tooltip-hook="#popup:nal"] [href="#nolimProductNameLink"]'
                  );
                  if (productNameLink) {
                    if (item.closest('.js-product')) {
                      productNameLink.innerHTML = item
                        .closest('.js-product')
                        .querySelector('.js-product-name').innerHTML;
                    }
                  }
                  const hiddenInput = document.querySelector('[name="tovar"]');
                  let nlstr = '';
                  const productName = item
                    .closest('.js-product')
                    .querySelector('.js-product-name');
                  const productSku = item
                    .closest('.js-product')
                    .querySelector('.js-product-sku');
                  const selectList = item
                    .closest('.js-product')
                    .querySelectorAll('select');
                  if (productName) {
                    nlstr += productName.innerHTML + ';';
                  }
                  if (productSku && productSku.innerHTML) {
                    nlstr += productSku.innerHTML + ';';
                  }
                  if (selectList.length >= 1) {
                    selectList.forEach((item) => {
                      nlstr += item.value + ';';
                    });
                  }
                  if (hiddenInput) {
                    hiddenInput.value = nlstr;
                  }
                });
                item.setAttribute('set-name-event', 'yes');
              }
            });
          }
        }
        function changeBtnCatalog() {
          unlockSelects();
          const disabledBtnsList = document.querySelectorAll(
            ' .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t776 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t778 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t786 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t951 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity)'
          );
          const jsProductList = document.querySelectorAll('.js-product');
          if (disabledBtnsList.length >= 1) {
            addBtn(disabledBtnsList, 'catalog');
            if (!isCatalogResize) {
              window.addEventListener(
                'resize',
                t_throttle(() => {
                  console.log('resizeCatalog');
                  deleteBtn('catalog');
                  addBtn(disabledBtnsList, 'catalog');
                })
              );
              isCatalogResize = true;
            }
          } else {
            deleteBtn('catalog');
          }
          quantityHideShow();
          const btnLinksList = document.querySelectorAll(
            '.t754 a[href="#popup:nal"], .t776 a[href="#popup:nal"], .t778 a[href="#popup:nal"], .t786 a[href="#popup:nal"], .t951 a[href="#popup:nal"]'
          );
          if (btnLinksList.length >= 1) {
            btnLinksList.forEach((item) => {
              if (item.getAttribute('set-name-event') != 'yes') {
                item.addEventListener('click', () => {
                  const productNameLink = document.querySelector(
                    '[data-tooltip-hook="#popup:nal"] [href="#nolimProductNameLink"]'
                  );
                  if (productNameLink) {
                    if (item.closest('.js-product')) {
                      productNameLink.innerHTML = item
                        .closest('.js-product')
                        .querySelector('.js-product-name').innerHTML;
                    }
                  }
                  const hiddenInput = document.querySelector('[name="tovar"]');
                  let nlstr = '';
                  const productName = item
                    .closest('.js-product')
                    .querySelector('.js-product-name');
                  const productSku = item
                    .closest('.js-product')
                    .querySelector('.js-product-sku');
                  const selectList = item
                    .closest('.js-product')
                    .querySelectorAll('select');
                  if (productName) {
                    nlstr += productName.innerHTML + ';';
                  }
                  if (productSku && productSku.innerHTML) {
                    nlstr += productSku.innerHTML + ';';
                  }
                  if (selectList.length >= 1) {
                    selectList.forEach((item) => {
                      nlstr += item.value + ';';
                    });
                  }
                  if (hiddenInput) {
                    hiddenInput.value = nlstr;
                  }
                });
                item.setAttribute('set-name-event', 'yes');
              }
            });
          }
        }
        function changeBtnProductBlock() {
          const disabledBtnsList = document.querySelectorAll(
            '.t744 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t762 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t760 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t922 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t780 .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity)'
          );
          if (disabledBtnsList.length >= 1) {
            addBtn(disabledBtnsList, 'block');
          } else {
            deleteBtn('block');
          }
          unlockSelects();
          quantityHideShow();
          const descriptionLinksList = document.querySelectorAll(
            '.t744 a[href="#linkDescr"], .t762 a[href="#linkDescr"], .t760 a[href="#linkDescr"], .t922 a[href="#linkDescr"], .t780 a[href="#linkDescr"]'
          );
          if (descriptionLinksList.length > 0) {
            const orderBtnsList = [];
            descriptionLinksList.forEach((item) => {
              const orderBtn = item
                .closest('.js-product')
                .querySelector('[href="#order"]');
              orderBtnsList.push(orderBtn);
            });
            orderBtnsList.forEach((item) => {
              if (
                !item.classList.contains('t-store__prod-popup__btn_disabled')
              ) {
                item.classList.add('t-store__prod-popup__btn_disabled');
                item.classList.add('nlm038-disabled');
              }
            });
            addBtn(orderBtnsList, 'block');
          }
          const productNameLinkList = document.querySelectorAll(
            '[href="#nolimProductNameLink"]'
          );
          if (productNameLinkList.length > 0) {
            productNameLinkList.forEach((item) => {
              if (item.closest('.js-product')) {
                item.innerHTML = item
                  .closest('.js-product')
                  .querySelector('.js-product-name').innerHTML;
              }
            });
          }
          const btnLinksList = document.querySelectorAll(
            '.t744 a[href="#popup:nal"], .t762 a[href="#popup:nal"], .t760 a[href="#popup:nal"], .t922 a[href="#popup:nal"], .t780 a[href="#popup:nal"]'
          );
          if (btnLinksList.length >= 1) {
            btnLinksList.forEach((item) => {
              if (item.getAttribute('set-name-event') != 'yes') {
                item.addEventListener('click', () => {
                  const productNameLink = document.querySelector(
                    '[data-tooltip-hook="#popup:nal"] [href="#nolimProductNameLink"]'
                  );
                  if (productNameLink) {
                    if (item.closest('.js-product')) {
                      productNameLink.innerHTML = item
                        .closest('.js-product')
                        .querySelector('.js-product-name').innerHTML;
                    }
                  }
                  const hiddenInput = document.querySelector('[name="tovar"]');
                  let nlstr = '';
                  const productName = item
                    .closest('.js-product')
                    .querySelector('.js-product-name');
                  const productSku = item
                    .closest('.js-product')
                    .querySelector('.js-product-sku');
                  const selectList = item
                    .closest('.js-product')
                    .querySelectorAll('select');
                  if (productName) {
                    nlstr += productName.innerHTML + ';';
                  }
                  if (productSku && productSku.innerHTML) {
                    nlstr += productSku.innerHTML + ';';
                  }
                  if (selectList.length >= 1) {
                    selectList.forEach((item) => {
                      nlstr += item.value + ';';
                    });
                  }
                  if (hiddenInput) {
                    hiddenInput.value = nlstr;
                  }
                });
                item.setAttribute('set-name-event', 'yes');
              }
            });
          }
        }
        function changeBtnProductPopup() {
          const int = setInterval(() => {
            popup = document.querySelector('.t-popup_show');
            if (popup) {
              clearInterval(int);
              const popupDisabledBtnsList = document.querySelectorAll(
                '.t-popup_show .t-store__product-popup .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t-popup_show .t756__btn.t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t-popup_show .t766__btn.t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity), .t-popup_show .t750__btn.t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity)'
              );
              if (popupDisabledBtnsList.length >= 1) {
                addBtn(popupDisabledBtnsList, 'popup');
              } else {
                deleteBtn('popup');
              }
              unlockSelects();
              quantityHideShow();
              const popupDescLink = document.querySelector(
                '.t-popup_show [href="#linkDescr"]'
              );
              if (popupDescLink) {
                const orderBtnsList = popup.querySelectorAll(
                  '.t-store__product-popup [href="#order"], [href="#order"].t756__btn, [href="#order"].t766__btn, [href="#order"].t750__btn'
                );
                orderBtnsList.forEach((item) => {
                  if (
                    !item.classList.contains(
                      't-store__prod-popup__btn_disabled'
                    )
                  ) {
                    item.classList.add('t-store__prod-popup__btn_disabled');
                    item.classList.add('nlm038-disabled');
                  }
                });
                addBtn(orderBtnsList, 'popup');
              }
              const btnLinksList = document.querySelectorAll(
                '.t-popup_show .t-store__product-popup a[href="#popup:nal"], .t-popup_show .t756__container a[href="#popup:nal"], .t-popup_show .t766__container a[href="#popup:nal"], .t-popup_show .t750__container a[href="#popup:nal"]'
              );
              if (btnLinksList.length >= 1) {
                btnLinksList.forEach((item) => {
                  const productNameLinkList = document.querySelectorAll(
                    '[href="#nolimProductNameLink"]'
                  );
                  if (productNameLinkList.length > 0) {
                    productNameLinkList.forEach((item) => {
                      if (item.closest('.js-product')) {
                        item.innerHTML = item
                          .closest('.js-product')
                          .querySelector('.js-product-name').innerHTML;
                      }
                    });
                  }
                  if (item.getAttribute('set-name-event') != 'yes') {
                    item.addEventListener('click', () => {
                      const productNameLink = document.querySelector(
                        '[data-tooltip-hook="#popup:nal"] [href="#nolimProductNameLink"]'
                      );
                      if (productNameLink) {
                        if (item.closest('.js-product')) {
                          productNameLink.innerHTML = item
                            .closest('.js-product')
                            .querySelector('.js-product-name').innerHTML;
                        }
                      }
                      const hiddenInput =
                        document.querySelector('[name="tovar"]');
                      let nlstr = '';
                      const productName = item
                        .closest('.js-product')
                        .querySelector('.js-product-name');
                      const productSku = item
                        .closest('.js-product')
                        .querySelector('.js-product-sku');
                      const selectList = item
                        .closest('.js-product')
                        .querySelectorAll('select');
                      if (productName) {
                        nlstr += productName.innerHTML + ';';
                      }
                      if (productSku && productSku.innerHTML) {
                        nlstr += productSku.innerHTML + ';';
                      }
                      if (selectList.length >= 1) {
                        selectList.forEach((item) => {
                          nlstr += item.value + ';';
                        });
                      }
                      if (hiddenInput) {
                        hiddenInput.value = nlstr;
                      }
                    });
                    item.setAttribute('set-name-event', 'yes');
                  }
                });
              }
              changeBtnRelevants();
            }
          }, 50);
        }
        function changeBtnProductPage() {
          const disabledBtnsList = document.querySelectorAll(
            '.t-store__product-snippet .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity)'
          );
          if (disabledBtnsList.length >= 1) {
            addBtn(disabledBtnsList, 'page');
          } else {
            deleteBtn('page');
          }
          unlockSelects();
          quantityHideShow();
          const descLink = document.querySelector(
            '.t-store__product-snippet [href="#linkDescr"]'
          );
          if (descLink) {
            const orderBtnsList = document.querySelectorAll(
              '.t-store__product-snippet [href="#order"]'
            );
            orderBtnsList.forEach((item) => {
              if (
                !item.classList.contains('t-store__prod-popup__btn_disabled')
              ) {
                item.classList.add('t-store__prod-popup__btn_disabled');
                item.classList.add('nlm038-disabled');
              }
            });
            addBtn(orderBtnsList, 'page');
          }
          const btnLinksList = document.querySelectorAll(
            '.t-store__product-snippet a[href="#popup:nal"]'
          );
          if (btnLinksList.length >= 1) {
            btnLinksList.forEach((item) => {
              const productNameLinkList = document.querySelectorAll(
                '[href="#nolimProductNameLink"]'
              );
              if (productNameLinkList.length > 0) {
                productNameLinkList.forEach((item) => {
                  if (item.closest('.js-product')) {
                    item.innerHTML = item
                      .closest('.js-product')
                      .querySelector('.js-product-name').innerHTML;
                  }
                });
              }
              if (item.getAttribute('set-name-event') != 'yes') {
                item.addEventListener('click', () => {
                  const productNameLink = document.querySelector(
                    '[data-tooltip-hook="#popup:nal"] [href="#nolimProductNameLink"]'
                  );
                  if (productNameLink) {
                    if (item.closest('.js-product')) {
                      productNameLink.innerHTML = item
                        .closest('.js-product')
                        .querySelector('.js-product-name').innerHTML;
                    }
                  }
                  const hiddenInput = document.querySelector('[name="tovar"]');
                  let nlstr = '';
                  const productName = item
                    .closest('.js-product')
                    .querySelector('.js-product-name');
                  const productSku = item
                    .closest('.js-product')
                    .querySelector('.js-product-sku');
                  const selectList = item
                    .closest('.js-product')
                    .querySelectorAll('select');
                  if (productName) {
                    nlstr += productName.innerHTML + ';';
                  }
                  if (productSku && productSku.innerHTML) {
                    nlstr += productSku.innerHTML + ';';
                  }
                  if (selectList.length >= 1) {
                    selectList.forEach((item) => {
                      nlstr += item.value + ';';
                    });
                  }
                  if (hiddenInput) {
                    hiddenInput.value = nlstr;
                  }
                });
                item.setAttribute('set-name-event', 'yes');
              }
            });
          }
          changeBtnRelevants();
        }
        function changeBtnRelevants() {
          unlockSelects();
          const disabledBtnsList = document.querySelectorAll(
            '.t-store__relevants__container .t-store__prod-popup__btn_disabled:not(.t-store__prod__quantity)'
          );
          if (disabledBtnsList.length >= 1) {
            addBtn(disabledBtnsList, 'relevants');
            if (!isRelevantsResize) {
              window.addEventListener(
                'resize',
                t_throttle(() => {
                  console.log('resizeRelevants');
                  deleteBtn('catalog');
                  addBtn(disabledBtnsList, 'catalog');
                })
              );
              isRelevantsResize = true;
            }
          } else {
            deleteBtn('relevants');
          }
          quantityHideShow();
          const btnLinksList = document.querySelectorAll(
            '.t-store__relevants__container a[href="#popup:nal"]'
          );
          if (btnLinksList.length >= 1) {
            btnLinksList.forEach((item) => {
              if (item.getAttribute('set-name-event') != 'yes') {
                item.addEventListener('click', () => {
                  const productNameLink = document.querySelector(
                    '[data-tooltip-hook="#popup:nal"] [href="#nolimProductNameLink"]'
                  );
                  if (productNameLink) {
                    if (item.closest('.js-product')) {
                      productNameLink.innerHTML = item
                        .closest('.js-product')
                        .querySelector('.js-product-name').innerHTML;
                    }
                  }
                  const hiddenInput = document.querySelector('[name="tovar"]');
                  let nlstr = '';
                  const productName = item
                    .closest('.js-product')
                    .querySelector('.js-product-name');
                  const productSku = item
                    .closest('.js-product')
                    .querySelector('.js-product-sku');
                  const selectList = item
                    .closest('.js-product')
                    .querySelectorAll('select');
                  if (productName) {
                    nlstr += productName.innerHTML + ';';
                  }
                  if (productSku && productSku.innerHTML) {
                    nlstr += productSku.innerHTML + ';';
                  }
                  if (selectList.length >= 1) {
                    selectList.forEach((item) => {
                      nlstr += item.value + ';';
                    });
                  }
                  if (hiddenInput) {
                    hiddenInput.value = nlstr;
                  }
                });
                item.setAttribute('set-name-event', 'yes');
              }
            });
          }
        }
      }
    }, 100);
  });
})();
