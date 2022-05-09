# Nova Input Mask
> Nova custom field text with masks.

[![Latest Version on Github](https://img.shields.io/github/release/wemersonrv/input-mask.svg?style=flat)](https://packagist.org/packages/wemersonrv/input-mask)

Nova custom field text with masks. It uses `vue-the-mask` to implement mask directive to input field.

![inputmask](https://user-images.githubusercontent.com/2028673/57864036-926d0800-77d1-11e9-9f04-79bce52509a7.png)

## Installation

```sh
composer require jeffersonsimaogoncalves/input-mask
```

## Usage

Import it in your resources and add the InputMask to `fields` method.

```php
use Wemersonrv\InputMask\InputMask;

public function fields(Request $request)
{
    return [
        ID::make('ID', 'id')->sortable(),
        Text::make('Name', 'name'),

        InputMask::make('CPF', 'cpf')
            ->mask('###.###.###-##')  // 111.222.333.44
            ->raw(),                  // 11122233344

    ];
}
```

### Methods

This custom field has only two method:

* `mask('###...')` Implement the mask on your input field;
* `raw()` If you want to save your value without mask, just add this method.

## TODO List

* Apply mask to index and detail fields
* Create a set of predefined custom fields from InputMask with validation
  * Brazilian CPF
  * Brazilian CNPJ
  * Brazilian Zip code (CEP)
  * Brazilian landline phone
  * Brazilian mobile phone with 9 digit

## Release History

* 0.1.2
  * Fix license in `composer.json` from GPLv3 to *GPL-3.0-or-later*
* 0.1.1
  * Fix license in `composer.json` o GPLv3
* 0.1.0
  * The First Oficial release
  * CHANGE: Nothing important. 
  * ADD: button badge for github release
* 0.0.1
  * Work in progress

## References

* Laravel Framework
  * [https://laravel.com/](https://laravel.com/)
* Laravel Nova
  * [https://nova.laravel.com/](https://nova.laravel.com/)
* Vue-the-Mask
  * [https://vuejs-tips.github.io/vue-the-mask/](https://vuejs-tips.github.io/vue-the-mask/)

## Meta

Wemerson Guimarães – [@WemersonCG](https://twitter.com/WemersonCG) – wemersonrv@gmail.com

Distributed under the GPLv3 license. See [LICENSE.md](LICENSE.md) for more information.

[https://github.com/wemersonrv/input-mask/](https://github.com/wemersonrv/input-mask/)
