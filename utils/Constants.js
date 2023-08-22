export const CONSTANTS = Object.freeze({
  productName: '상품명',
  price: '가격',
  quantity: '수량',
  addProduct: '상품 추가하기',
  add: '추가하기',
  productStatus: '상품 현황',
  insertCoin: '금액 투입',
  insert: '투입',
  amountInserted: '투입한 금액: ',
  availableProductStatus: '구매할 수 있는 상품 현황',
  purchase: '구매',
  purchaseButtonText: '구매하기',
  change: '잔돈',
  return: '반환하기',
  coin: '동전',
  coinQuantityHeader: '개수',
  coinQuantityRow: '개',
  chargeVendingMachine: '자판기 동전 충전하기',
  charge: '충전하기',
  chargedAmount: '보유 금액: ',
  chargedCoinStatus: '동전 보유 현황',
  coin500: '500원',
  coin100: '100원',
  coin50: '50원',
  coin10: '10원',
  number500: 500,
  number100: 100,
  number50: 50,
  number10: 10,
  productsKey: 'products',
  minPrice: 100,
  priceUnit: 10,
  chargedAmountKey: 'chargedAmount',
  coinQuantityKey: 'coinQuantity',
  minChargeAmount: 10,
});

export const IDS = Object.freeze({
  purchaseTabButton: 'product-purchase-menu',
  chargingTabButton: 'vending-machine-manage-menu',
  manageProductTabButton: 'product-add-menu',
  productPurchaseContainer: 'product-purchase-container',
  vendingMachineContainer: 'vending-machine-container',
  productManageContainer: 'product-manage-container',
  container: 'container',
  productManageForm: 'product-manage-form',
  productNameInput: 'product-name-input',
  productPriceInput: 'product-price-input',
  productQuantityInput: 'product-quantity-input',
  addProductButton: 'product-add-button',
  productManageTable: 'product-manage-table',
  vendingMachineChargeInput: 'vending-machine-charge-input',
  vendingMachineChargeButton: 'vending-machine-charge-button',
  vendingMachineChargeAmount: 'vending-machine-charge-amount',
  vendingMachineCoin500Quantity: 'vending-machine-coin-500-quantity',
  vendingMachineCoin100Quantity: 'vending-machine-coin-100-quantity',
  vendingMachinecoin50Quantity: 'vending-machine-coin-50-quantity',
  vendingMachinecoin10Quantity: 'vending-machine-coin-10-quantity',
  chargeInput: 'charge-input',
  chargeButton: 'charge-button',
  chargeAmount: 'charge-amount',
  availableProductTable: 'available-product-table',
  returnButton: 'coin-return-button',
  coinReturnTable: 'coin-return-table',
  coin500Quantity: 'coin-500-quantity',
  coin100Quantity: 'coin-100-quantity',
  coin50Quantity: 'coin-50-quantity',
  coin10Quantity: 'coin-10-quantity',
});

export const CLASSES = Object.freeze({
  productList: 'product-manage-item',
  productName: 'product-manage-name',
  productPrice: 'product-manage-price',
  productQuantity: 'product-manage-quantity',
  productPurchaseItem: 'product-purchase-item',
  purchaseButton: 'purchase-button',
  productPurchaseName: 'product-purchase-name',
  productPurchasePrice: 'product-purchase-price',
  productQuantity: 'product-purchase-quantity',
});

export const DATASETS = Object.freeze({
  productName: 'data-product-name',
  price: 'data-product-price',
  quantity: 'data-product-quantity',
});

export const ERROR_MESSAGE = Object.freeze({
  lessThanMinPrice: `가격은 최소 ${CONSTANTS.minPrice}원 이상이어야 합니다.`,
  notDividedByUnit: `가격은 ${CONSTANTS.priceUnit}원으로 나누어 떨어져야 합니다.`,
  lessThanMinChargeAmount: `충전하는 금액은 최소 ${CONSTANTS.minChargeAmount}원 이상이어야 합니다.`,
});
