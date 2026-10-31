import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSystemSizing,
  filterProducts,
  filterSolutions,
  validateInquiryForm,
} from './securityCalculator';
import { HARDWARE_PRODUCTS, SECURITY_SOLUTIONS } from '../data/securityData';

test('filterSolutions returns all 6 core solutions when category is All and subsets accurately', () => {
  const all = filterSolutions(SECURITY_SOLUTIONS, 'All');
  assert.equal(all.length, 6);

  const video = filterSolutions(SECURITY_SOLUTIONS, 'Video Surveillance');
  assert.equal(video.length, 2);
  assert.ok(video.every((item) => item.category === 'Video Surveillance'));

  const access = filterSolutions(SECURITY_SOLUTIONS, 'Access & Perimeter');
  assert.equal(access.length, 2);
});

test('filterProducts filters by category and search query across all 8 studio-imaged products', () => {
  const all = filterProducts(HARDWARE_PRODUCTS, 'All', '');
  assert.equal(all.length, 8);
  assert.ok(all.every((p) => p.imagePath.startsWith('/src/assets/images/prod_')));

  const ptzSearch = filterProducts(HARDWARE_PRODUCTS, 'All', '36X');
  assert.equal(ptzSearch.length, 1);
  assert.equal(ptzSearch[0].sku, 'SS-PTZ-36X-LSR');

  const recorders = filterProducts(HARDWARE_PRODUCTS, 'Recorders', '');
  assert.equal(recorders.length, 1);

  const combined = filterProducts(HARDWARE_PRODUCTS, 'Access Control', 'Facial');
  assert.equal(combined.length, 1);
  assert.equal(combined[0].sku, 'SS-BIO-FACE-AI');
});

test('calculateSystemSizing computes NVR channels, storage TB, PoE budget, and fence zones', () => {
  const smallSite = calculateSystemSizing({
    cameraCount: 6,
    resolutionMp: 4,
    retentionDays: 14,
    perimeterMeters: 0,
    biometricDoors: 1,
  });

  assert.equal(smallSite.recommendedNvrChannels, 8);
  assert.ok(smallSite.estimatedStorageTb >= 2);
  assert.equal(smallSite.fenceZonesRequired, 0);
  assert.equal(smallSite.copperCableReels305m, 2);
});

test('validateInquiryForm rejects empty or malformed inputs and accepts valid Pakistani contact info', () => {
  const invalid = validateInquiryForm({
    inquiryType: 'survey',
    fullName: '',
    phoneNumber: '123',
    emailAddress: 'not-an-email',
    cityDistrict: 'Lahore',
    securitySolution: '4K IP Surveillance & ANPR',
    propertyType: 'Industrial Factory',
    projectMessage: '',
    whatsappFastTrack: true,
    selectedSkus: [],
  });

  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phoneNumber);
  assert.ok(invalid.errors.emailAddress);

  const valid = validateInquiryForm({
    inquiryType: 'quotation',
    fullName: 'Tariq Mahmood',
    phoneNumber: '+92 302 1151122',
    emailAddress: 'tariq@mastermotors.pk',
    cityDistrict: 'Lahore',
    securitySolution: '4K IP Surveillance & ANPR',
    propertyType: 'Industrial Factory',
    projectMessage: 'Need 24 cameras for Sundar Estate plant.',
    whatsappFastTrack: true,
    selectedSkus: ['SS-PTZ-36X-LSR'],
  });

  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
