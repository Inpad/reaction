import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import {
  Metadata,
  NumericInput,
  Translation,
  TagList,
  Currency
} from "/imports/plugins/core/ui/client/components/";
import { AddToCartButton, MediaGallery } from "./"
import { EditContainer } from "/imports/plugins/core/ui/client/containers";

class ProductMetadata extends Component {
  get metafields() {
    return this.props.metafields || this.props.product.metafields;
  }

  get showEditControls() {
    return this.props.product && this.props.editable;
  }

  renderEditButton() {
    if (this.showEditControls) {
      return (
        <span className="edit-button">
          <EditContainer
            data={this.props.product}
            editTypes={["edit"]}
            editView="variantForm"
            field="metafields"
            i18nKeyLabel="productDetailEdit.editMetadata"
            label="Edit Metadata"
            permissions={["createProduct"]}
            {...this.props.editContainerProps}
          />
        </span>
      );
    }

    return null;
  }

  render() {
    if (Array.isArray(this.metafields) && this.metafields.length > 0) {
      const headerClassName = classnames({
        "meta-header": true,
        "edit": this.showEditControls
      });

      return (
        <div className="pdp product-metadata">
          <h3 className={headerClassName}>
            <Translation defaultValue="Details" i18nKey="productDetail.details" />
            {this.renderEditButton()}
          </h3>
          <Metadata editable={false} metafields={this.metafields} />
        </div>
      );
    }

    return null;
  }
}

ProductMetadata.propTypes = {
  metafields: PropTypes.arrayOf(PropTypes.object)
};

export default ProductMetadata;
