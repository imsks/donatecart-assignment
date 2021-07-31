import { CampaignData } from '../../interfaces';
import supertest from 'supertest';
import app from '../../app';

const request = supertest(app);

const BASE_API_URL = '/api/v1';

// 1. Get all campaigns with descending order of total amount
describe('Get all campaigns', () => {
  it('1. Should get list of all campaigns with descending order of total amount', async done => {
    const response = await request.get(`${BASE_API_URL}/`);

    expect(response.statusCode).toEqual(200);

    const { status, payload } = response.body;

    expect(status).toEqual(true);
    expect(response.body).toHaveProperty('payload');

    const [
      {
        code,
        title,
        featured,
        priority,
        shortDesc,
        imageSrc,
        created,
        endDate,
        totalAmount,
        procuredAmount,
        totalProcured,
        backersCount,
        categoryId,
        ngoCode,
        ngoName,
        daysLeft,
        percentage,
      },
    ] = payload as Array<CampaignData>;

    expect(typeof code).toBe('string');
    expect(typeof title).toBe('string');
    expect(typeof featured).toBe('boolean');
    expect(typeof priority).toBe('number');
    expect(typeof shortDesc).toBe('string');
    expect(typeof imageSrc).toBe('string');
    expect(typeof created).toBe('string');
    expect(typeof endDate).toBe('string');
    expect(typeof totalAmount).toBe('number');
    expect(typeof procuredAmount).toBe('number');
    expect(typeof totalProcured).toBe('number');
    expect(typeof backersCount).toBe('number');
    expect(typeof categoryId).toBe('number');
    expect(typeof ngoCode).toBe('string');
    expect(typeof ngoName).toBe('string');
    expect(typeof daysLeft).toBe('number');
    expect(typeof percentage).toBe('number');

    done();
  });
});

// 2. Get all campaigns active since last month
describe('Get all active campaigns', () => {
  it('1. Should get list of all active campaigns', async done => {
    const response = await request.get(`${BASE_API_URL}/active`);

    expect(response.statusCode).toEqual(200);

    const { status, payload } = response.body;

    expect(status).toEqual(true);
    expect(response.body).toHaveProperty('payload');

    const [
      {
        code,
        title,
        featured,
        priority,
        imageSrc,
        created,
        endDate,
        totalAmount,
        procuredAmount,
        totalProcured,
        backersCount,
        categoryId,
        ngoCode,
        ngoName,
        daysLeft,
        percentage,
      },
    ] = payload as Array<CampaignData>;

    expect(typeof code).toBe('string');
    expect(typeof title).toBe('string');
    expect(typeof featured).toBe('boolean');
    expect(typeof priority).toBe('number');
    expect(typeof imageSrc).toBe('string');
    expect(typeof created).toBe('string');
    expect(typeof endDate).toBe('string');
    expect(typeof totalAmount).toBe('number');
    expect(typeof procuredAmount).toBe('number');
    expect(typeof totalProcured).toBe('number');
    expect(typeof backersCount).toBe('number');
    expect(typeof categoryId).toBe('number');
    expect(typeof ngoCode).toBe('string');
    expect(typeof ngoName).toBe('string');
    expect(typeof daysLeft).toBe('number');
    expect(typeof percentage).toBe('number');

    done();
  });
});

// 3. Get all closed campaigns
describe('Get all closed campaigns', () => {
  it('1. Should get list of all closed campaigns', async done => {
    const response = await request.get(`${BASE_API_URL}/closed`);

    expect(response.statusCode).toEqual(200);

    const { status, payload } = response.body;

    expect(status).toEqual(true);
    expect(response.body).toHaveProperty('payload');

    const [
      {
        code,
        title,
        featured,
        priority,
        imageSrc,
        created,
        endDate,
        totalAmount,
        procuredAmount,
        totalProcured,
        backersCount,
        categoryId,
        ngoCode,
        ngoName,
        daysLeft,
        percentage,
      },
    ] = payload as Array<CampaignData>;

    expect(typeof code).toBe('string');
    expect(typeof title).toBe('string');
    expect(typeof featured).toBe('boolean');
    expect(typeof priority).toBe('number');
    expect(typeof imageSrc).toBe('string');
    expect(typeof created).toBe('string');
    expect(typeof endDate).toBe('string');
    expect(typeof totalAmount).toBe('number');
    expect(typeof procuredAmount).toBe('number');
    expect(typeof totalProcured).toBe('number');
    expect(typeof backersCount).toBe('number');
    expect(typeof categoryId).toBe('number');
    expect(typeof ngoCode).toBe('string');
    expect(typeof ngoName).toBe('string');
    expect(typeof daysLeft).toBe('number');
    expect(typeof percentage).toBe('number');

    done();
  });
});
